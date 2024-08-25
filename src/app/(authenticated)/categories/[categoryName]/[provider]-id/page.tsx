'use client'

import { Prisma } from '@prisma/client'
import { Typography, Row, Col, Image, Spin } from 'antd'
import { DollarCircleOutlined, StarOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ServiceProviderDetailPage() {
  const router = useRouter()
  const params = useParams<{ providerId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: serviceProvider, isLoading } =
    Api.serviceProvider.findUnique.useQuery({
      where: { id: params.providerId },
      include: { serviceProviderImages: true },
    })

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!serviceProvider) {
    enqueueSnackbar('Service provider not found', { variant: 'error' })
    router.push('/home')
    return null
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>{serviceProvider.name}</Title>
      <Paragraph>{serviceProvider.description}</Paragraph>
      <Row gutter={[16, 16]} justify="center">
        {serviceProvider.serviceProviderImages?.map(image => (
          <Col key={image.id} xs={24} sm={12} md={8} lg={6}>
            <Image src={image.imageUrl} alt="Service Provider Work" />
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: '20px' }}>
        <Col>
          <DollarCircleOutlined
            style={{ fontSize: '24px', marginRight: '8px' }}
          />
          <Text>{serviceProvider.price.toString()}</Text>
        </Col>
        {serviceProvider.rating && (
          <Col>
            <StarOutlined style={{ fontSize: '24px', marginRight: '8px' }} />
            <Text>{serviceProvider.rating.toString()}</Text>
          </Col>
        )}
      </Row>
    </PageLayout>
  )
}
