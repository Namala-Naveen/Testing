'use client'

import { Typography, Button, List, Row, Col, Card, Spin } from 'antd'
import { ShoppingCartOutlined, DollarCircleOutlined } from '@ant-design/icons'
import React from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function PaymentPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: userData, isLoading } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
    include: {
      carts: { include: { cartItems: { include: { serviceProvider: true } } } },
    },
  })

  const handlePayment = async () => {
    try {
      const paymentLink = await Api.billing.createPaymentLink({
        productId: 'some-product-id',
      })
      router.push(paymentLink)
    } catch (error) {
      enqueueSnackbar('Failed to create payment link', { variant: 'error' })
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  const cartItems = userData?.carts?.[0]?.cartItems || []
  const totalCost = cartItems.reduce(
    (total, item) => total + (item.serviceProvider?.price || 0),
    0,
  )

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>Your Cart Summary</Title>
          <Paragraph>
            Review the services in your cart and proceed to payment to finalize
            your bookings.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <List
            itemLayout="horizontal"
            dataSource={cartItems}
            renderItem={item => (
              <List.Item>
                <Card style={{ width: '100%' }}>
                  <Row gutter={16}>
                    <Col span={4}>
                      <img
                        src={item.serviceProvider?.imageUrl}
                        alt={item.serviceProvider?.name}
                        style={{ width: '100%' }}
                      />
                    </Col>
                    <Col span={16}>
                      <Title level={4}>{item.serviceProvider?.name}</Title>
                      <Text>{item.serviceProvider?.description}</Text>
                    </Col>
                    <Col span={4}>
                      <Text strong>
                        {item.serviceProvider?.price.toString()} USD
                      </Text>
                    </Col>
                  </Row>
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Card>
            <Row justify="space-between">
              <Col>
                <Title level={4}>Total Cost</Title>
              </Col>
              <Col>
                <Text strong>{totalCost.toString()} USD</Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col>
          <Button
            type="primary"
            icon={<DollarCircleOutlined />}
            size="large"
            onClick={handlePayment}
          >
            Proceed to Payment
          </Button>
        </Col>
      </Row>
    </PageLayout>
  )
}
