'use client'

import { Prisma } from '@prisma/client'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: serviceProviders, isLoading } =
    Api.serviceProvider.findMany.useQuery({
      include: { serviceProviderImages: true },
    })

  const handleCategoryClick = (category: string) => {
    router.push(`/categories/${category}`)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2} style={{ textAlign: 'center' }}>
        Wedding Planning Services
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>
        Explore our wide range of wedding planning services to make your special
        day unforgettable.
      </Paragraph>

      {isLoading ? (
        <Spin tip="Loading..." />
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {serviceProviders?.map(provider => (
            <Col key={provider.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt={provider.name}
                    src={provider.imageUrl || '/default-image.jpg'}
                  />
                }
                onClick={() => handleCategoryClick(provider.category)}
              >
                <Card.Meta
                  title={provider.name}
                  description={
                    <>
                      <Text>{provider.description}</Text>
                      <br />
                      <Text strong>Price: ${provider.price.toString()}</Text>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}
