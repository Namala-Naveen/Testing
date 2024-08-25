'use client'

import { Prisma } from '@prisma/client'
import { Typography, List, Button, Row, Col, Card, Spin } from 'antd'
import { DeleteOutlined, ShoppingOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function CartPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: userData,
    isLoading,
    refetch,
  } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
    include: {
      carts: { include: { cartItems: { include: { serviceProvider: true } } } },
    },
  })

  const { mutateAsync: deleteCartItem } = Api.cartItem.delete.useMutation()

  const handleRemoveService = async (cartItemId: string) => {
    try {
      await deleteCartItem({ where: { id: cartItemId } })
      enqueueSnackbar('Service removed from cart', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to remove service', { variant: 'error' })
    }
  }

  const handleContinueBrowsing = () => {
    router.push('/home')
  }

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  const cartItems = userData?.carts?.[0]?.cartItems || []

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Cart</Title>
      <Text>Review the services you have added to your cart.</Text>
      <List
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={item => (
          <List.Item
            actions={[
              <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleRemoveService(item.id)}
              >
                Remove
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={item.serviceProvider?.name}
              description={item.serviceProvider?.description}
            />
            <Text strong>${item.serviceProvider?.price.toString()}</Text>
          </List.Item>
        )}
      />
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col>
          <Button
            type="primary"
            icon={<ShoppingOutlined />}
            onClick={handleContinueBrowsing}
          >
            Continue Browsing
          </Button>
        </Col>
      </Row>
    </PageLayout>
  )
}
