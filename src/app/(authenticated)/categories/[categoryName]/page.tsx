'use client'

import { Prisma } from '@prisma/client'
import { useState } from 'react'
import { Typography, Select, List, Card, Spin, Row, Col } from 'antd'
import { StarOutlined, DollarOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ServiceProviderCategoryPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const categoryName = params.categoryName

  const [sortCriteria, setSortCriteria] = useState<string>('price')

  const {
    data: serviceProviders,
    isLoading,
    refetch,
  } = Api.serviceProvider.findMany.useQuery({
    where: { category: categoryName },
    orderBy: { [sortCriteria]: 'asc' },
  })

  const handleSortChange = (value: string) => {
    setSortCriteria(value)
    refetch()
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Service Providers in {categoryName}</Title>
      <Text>
        Choose from the best service providers in the {categoryName} category.
      </Text>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Select
            defaultValue="price"
            style={{ width: 200 }}
            onChange={handleSortChange}
          >
            <Option value="price">Sort by Price</Option>
            <Option value="rating">Sort by Rating</Option>
            <Option value="name">Sort by Name</Option>
          </Select>
        </Col>
      </Row>
      {isLoading ? (
        <Spin size="large" style={{ display: 'block', marginTop: 50 }} />
      ) : (
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={serviceProviders}
          renderItem={item => (
            <List.Item>
              <Card
                hoverable
                cover={<img alt={item.name} src={item.imageUrl} />}
                onClick={() =>
                  router.push(`/categories/${categoryName}/${item.id}`)
                }
              >
                <Card.Meta title={item.name} description={item.description} />
                <div style={{ marginTop: 10 }}>
                  <Text>
                    <DollarOutlined /> {item.price.toString()}
                  </Text>
                  <br />
                  <Text>
                    <StarOutlined /> {item.rating?.toString() || 'N/A'}
                  </Text>
                </div>
              </Card>
            </List.Item>
          )}
        />
      )}
    </PageLayout>
  )
}
