import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('203b74cd-8c16-4127-9033-d130a0ae9a5a', '1Sonny_Keebler@gmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv789012', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('f00a3c0d-5980-46c8-aded-4eda79f6325e', '8Aurelie12@gmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=10', 'inv123456', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('a3159a0e-16dd-4e0c-b3ea-7d63e634b914', '15Merl.OKon@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=17', 'inv654321', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('b77f20e9-ed9e-471f-b75b-1e8b45c31774', '22Leon_Koelpin@yahoo.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=24', 'inv789012', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('31859965-5f9c-45fb-9b73-83dfec6acecc', '29Heather_Hartmann92@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=31', 'inv654321', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('d024cf15-891b-4730-aefc-82af93207822', '36Graciela.Mohr72@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=38', 'inv789012', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('0ce30915-c1fc-4fac-849c-83e253b652de', '43Genesis19@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inv654321', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('9de65adc-6448-4442-9d00-a5c24e8104ec', '57Karianne_Ledner30@hotmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv789012', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('67449987-37fb-46b5-acf0-78d5859d2fb9', '64Elvera.Conn@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv789012', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "ServiceProvider" ("id", "category", "name", "description", "price", "rating", "imageUrl") VALUES ('4a2e4c98-6345-47c8-bd64-3e36b193e575', 'makeup artists', 'Dream Weddings', 'Professional makeup artists to make you look stunning on your big day.', 911, 208, 'https://i.imgur.com/YfJQV5z.png?id=76');
INSERT INTO "ServiceProvider" ("id", "category", "name", "description", "price", "rating", "imageUrl") VALUES ('e804cf52-199a-44e2-9e97-762c79053798', 'catering', 'Decor Masters', 'Creative decoration teams to bring your wedding vision to life.', 553, 441, 'https://i.imgur.com/YfJQV5z.png?id=83');
INSERT INTO "ServiceProvider" ("id", "category", "name", "description", "price", "rating", "imageUrl") VALUES ('fc1de3de-36aa-4142-ba4d-849fb2a03f8a', 'catering', 'Dream Weddings', 'Providing topnotch videography services to capture your special moments.', 343, 757, 'https://i.imgur.com/YfJQV5z.png?id=90');
INSERT INTO "ServiceProvider" ("id", "category", "name", "description", "price", "rating", "imageUrl") VALUES ('ee53c0e6-276f-4c8b-aa70-94cb10f14554', 'videographers', 'Dream Weddings', 'Creative decoration teams to bring your wedding vision to life.', 268, 244, 'https://i.imgur.com/YfJQV5z.png?id=97');
INSERT INTO "ServiceProvider" ("id", "category", "name", "description", "price", "rating", "imageUrl") VALUES ('04547d79-e7ab-4145-9ccd-407d4c6cbcd0', 'venues', 'Decor Masters', 'Professional makeup artists to make you look stunning on your big day.', 430, 702, 'https://i.imgur.com/YfJQV5z.png?id=104');
INSERT INTO "ServiceProvider" ("id", "category", "name", "description", "price", "rating", "imageUrl") VALUES ('b57012db-7f61-4700-b707-7e568879520b', 'videographers', 'Dream Weddings', 'Creative decoration teams to bring your wedding vision to life.', 314, 944, 'https://i.imgur.com/YfJQV5z.png?id=111');
INSERT INTO "ServiceProvider" ("id", "category", "name", "description", "price", "rating", "imageUrl") VALUES ('ab364c66-752b-427b-832f-5e1747d33b2a', 'decoration teams', 'Decor Masters', 'Professional makeup artists to make you look stunning on your big day.', 607, 417, 'https://i.imgur.com/YfJQV5z.png?id=118');
INSERT INTO "ServiceProvider" ("id", "category", "name", "description", "price", "rating", "imageUrl") VALUES ('6ecefa76-5290-4015-ac0e-c6e0ef166ae0', 'venues', 'Decor Masters', 'Professional makeup artists to make you look stunning on your big day.', 293, 547, 'https://i.imgur.com/YfJQV5z.png?id=125');
INSERT INTO "ServiceProvider" ("id", "category", "name", "description", "price", "rating", "imageUrl") VALUES ('4447604d-9cb9-4c50-a01f-b30e17eb08a2', 'decoration teams', 'Dream Weddings', 'Beautiful venues to make your wedding day unforgettable.', 68, 803, 'https://i.imgur.com/YfJQV5z.png?id=132');
INSERT INTO "ServiceProvider" ("id", "category", "name", "description", "price", "rating", "imageUrl") VALUES ('05580e83-c753-45a6-9c50-0c4d45f2b6db', 'decoration teams', 'Elegant Events', 'Beautiful venues to make your wedding day unforgettable.', 171, 34, 'https://i.imgur.com/YfJQV5z.png?id=139');

INSERT INTO "ServiceProviderImage" ("id", "imageUrl", "serviceProviderId") VALUES ('ab019f2b-c97b-4f62-a8a4-8879719ea7fa', 'https://i.imgur.com/YfJQV5z.png?id=141', '4447604d-9cb9-4c50-a01f-b30e17eb08a2');
INSERT INTO "ServiceProviderImage" ("id", "imageUrl", "serviceProviderId") VALUES ('c4abd138-1184-4ce1-8542-57642f7dbf2f', 'https://i.imgur.com/YfJQV5z.png?id=143', '4a2e4c98-6345-47c8-bd64-3e36b193e575');
INSERT INTO "ServiceProviderImage" ("id", "imageUrl", "serviceProviderId") VALUES ('354b2f91-1254-48a1-9282-b18c25698fe2', 'https://i.imgur.com/YfJQV5z.png?id=145', 'ee53c0e6-276f-4c8b-aa70-94cb10f14554');
INSERT INTO "ServiceProviderImage" ("id", "imageUrl", "serviceProviderId") VALUES ('e50a50cb-a912-42a4-9e4e-f59af903f01b', 'https://i.imgur.com/YfJQV5z.png?id=147', 'fc1de3de-36aa-4142-ba4d-849fb2a03f8a');
INSERT INTO "ServiceProviderImage" ("id", "imageUrl", "serviceProviderId") VALUES ('e31edb31-25d0-484c-95f4-e08dc54dd6c2', 'https://i.imgur.com/YfJQV5z.png?id=149', '6ecefa76-5290-4015-ac0e-c6e0ef166ae0');
INSERT INTO "ServiceProviderImage" ("id", "imageUrl", "serviceProviderId") VALUES ('2724b790-74ab-4d18-8165-b4f6ad158596', 'https://i.imgur.com/YfJQV5z.png?id=151', '6ecefa76-5290-4015-ac0e-c6e0ef166ae0');
INSERT INTO "ServiceProviderImage" ("id", "imageUrl", "serviceProviderId") VALUES ('a0c720ec-26bc-4331-b95c-c5ba74fdb93d', 'https://i.imgur.com/YfJQV5z.png?id=153', '04547d79-e7ab-4145-9ccd-407d4c6cbcd0');
INSERT INTO "ServiceProviderImage" ("id", "imageUrl", "serviceProviderId") VALUES ('95d562d6-ff6d-4e2c-a69e-214ac81c809a', 'https://i.imgur.com/YfJQV5z.png?id=155', '4a2e4c98-6345-47c8-bd64-3e36b193e575');
INSERT INTO "ServiceProviderImage" ("id", "imageUrl", "serviceProviderId") VALUES ('95af3403-fd9f-46b4-bb96-0752c9b81ba5', 'https://i.imgur.com/YfJQV5z.png?id=157', '4447604d-9cb9-4c50-a01f-b30e17eb08a2');
INSERT INTO "ServiceProviderImage" ("id", "imageUrl", "serviceProviderId") VALUES ('cef2369d-8cbd-4b34-8c9d-562b2e169d4b', 'https://i.imgur.com/YfJQV5z.png?id=159', '4a2e4c98-6345-47c8-bd64-3e36b193e575');

INSERT INTO "Cart" ("id", "userId") VALUES ('cab1eacc-a0de-4c92-9f60-61da8eea2151', 'd024cf15-891b-4730-aefc-82af93207822');
INSERT INTO "Cart" ("id", "userId") VALUES ('79ed5c45-5a22-4c94-bfd9-fb5ff0223324', 'f00a3c0d-5980-46c8-aded-4eda79f6325e');
INSERT INTO "Cart" ("id", "userId") VALUES ('5060fc3e-67cd-4daf-a58a-32f9f8df7b1a', 'b77f20e9-ed9e-471f-b75b-1e8b45c31774');
INSERT INTO "Cart" ("id", "userId") VALUES ('326b6b1a-9903-43fb-8857-d91a9c568c8b', 'a3159a0e-16dd-4e0c-b3ea-7d63e634b914');
INSERT INTO "Cart" ("id", "userId") VALUES ('32d26da8-fb94-452f-a397-92e88c68b1dc', '0ce30915-c1fc-4fac-849c-83e253b652de');
INSERT INTO "Cart" ("id", "userId") VALUES ('1a7c79bf-a7d9-4cd3-9b7c-0aea71dc64df', 'b77f20e9-ed9e-471f-b75b-1e8b45c31774');
INSERT INTO "Cart" ("id", "userId") VALUES ('0529759d-7b01-476a-8577-2f7776d1d0f2', '31859965-5f9c-45fb-9b73-83dfec6acecc');
INSERT INTO "Cart" ("id", "userId") VALUES ('d55d89b5-a4e1-4ae7-b8fd-dbc1dccc4a8c', 'a3159a0e-16dd-4e0c-b3ea-7d63e634b914');
INSERT INTO "Cart" ("id", "userId") VALUES ('6a4bca5d-2fb1-451d-904e-836491785171', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Cart" ("id", "userId") VALUES ('5e3f88ab-2477-4bd0-b0a9-a44b1b42076f', '203b74cd-8c16-4127-9033-d130a0ae9a5a');

INSERT INTO "CartItem" ("id", "cartId", "serviceProviderId") VALUES ('ef32c7fe-9bba-4e47-8037-0a6b869f8cb5', '32d26da8-fb94-452f-a397-92e88c68b1dc', '04547d79-e7ab-4145-9ccd-407d4c6cbcd0');
INSERT INTO "CartItem" ("id", "cartId", "serviceProviderId") VALUES ('8efcb7d0-ea7f-457e-87fe-ca6a4554fbc2', 'cab1eacc-a0de-4c92-9f60-61da8eea2151', 'e804cf52-199a-44e2-9e97-762c79053798');
INSERT INTO "CartItem" ("id", "cartId", "serviceProviderId") VALUES ('33cadbcf-22fe-47bd-9516-93c88ef608b1', '326b6b1a-9903-43fb-8857-d91a9c568c8b', 'b57012db-7f61-4700-b707-7e568879520b');
INSERT INTO "CartItem" ("id", "cartId", "serviceProviderId") VALUES ('e77be513-3429-4998-9368-62477558a593', 'cab1eacc-a0de-4c92-9f60-61da8eea2151', 'fc1de3de-36aa-4142-ba4d-849fb2a03f8a');
INSERT INTO "CartItem" ("id", "cartId", "serviceProviderId") VALUES ('c425e0ec-9b14-489c-b17d-b3a1dccea90c', 'd55d89b5-a4e1-4ae7-b8fd-dbc1dccc4a8c', 'fc1de3de-36aa-4142-ba4d-849fb2a03f8a');
INSERT INTO "CartItem" ("id", "cartId", "serviceProviderId") VALUES ('56d2d1b6-8f2b-4d76-9ea6-3baa76a81c57', '5e3f88ab-2477-4bd0-b0a9-a44b1b42076f', '05580e83-c753-45a6-9c50-0c4d45f2b6db');
INSERT INTO "CartItem" ("id", "cartId", "serviceProviderId") VALUES ('65372c2e-aecd-4639-b3a6-d7decc7ce0d0', '6a4bca5d-2fb1-451d-904e-836491785171', 'ab364c66-752b-427b-832f-5e1747d33b2a');
INSERT INTO "CartItem" ("id", "cartId", "serviceProviderId") VALUES ('c0e60c5e-4aaa-460e-8119-a9a83deca9e9', 'd55d89b5-a4e1-4ae7-b8fd-dbc1dccc4a8c', '4447604d-9cb9-4c50-a01f-b30e17eb08a2');
INSERT INTO "CartItem" ("id", "cartId", "serviceProviderId") VALUES ('2c71ed51-318d-4837-9f79-232399d190e5', '5e3f88ab-2477-4bd0-b0a9-a44b1b42076f', '04547d79-e7ab-4145-9ccd-407d4c6cbcd0');
INSERT INTO "CartItem" ("id", "cartId", "serviceProviderId") VALUES ('8a79d1e8-60ca-41c8-b516-ce4bd762e9a1', '5e3f88ab-2477-4bd0-b0a9-a44b1b42076f', 'ab364c66-752b-427b-832f-5e1747d33b2a');

INSERT INTO "Payment" ("id", "totalAmount", "paymentStatus", "userId") VALUES ('07c6f242-ba1a-40e5-84ea-841b948d45f7', 955, 'Pending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Payment" ("id", "totalAmount", "paymentStatus", "userId") VALUES ('caa96393-7d80-4e41-b148-7bf4331da83b', 66, 'Pending', 'f00a3c0d-5980-46c8-aded-4eda79f6325e');
INSERT INTO "Payment" ("id", "totalAmount", "paymentStatus", "userId") VALUES ('0398a0d0-89f4-4dcb-8403-47c472d9047c', 544, 'Refunded', 'b77f20e9-ed9e-471f-b75b-1e8b45c31774');
INSERT INTO "Payment" ("id", "totalAmount", "paymentStatus", "userId") VALUES ('6eef6614-054f-4a89-9ef6-a7bf8b112e2e', 627, 'Pending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Payment" ("id", "totalAmount", "paymentStatus", "userId") VALUES ('4daf69e4-d6bc-4aac-97a0-5ad05c1f4fed', 448, 'Completed', '0ce30915-c1fc-4fac-849c-83e253b652de');
INSERT INTO "Payment" ("id", "totalAmount", "paymentStatus", "userId") VALUES ('59e14555-28a6-4da4-af74-e06ab593df22', 988, 'Refunded', '0ce30915-c1fc-4fac-849c-83e253b652de');
INSERT INTO "Payment" ("id", "totalAmount", "paymentStatus", "userId") VALUES ('f6fbc77d-986d-4665-9008-dc80f24842e7', 165, 'Pending', '9de65adc-6448-4442-9d00-a5c24e8104ec');
INSERT INTO "Payment" ("id", "totalAmount", "paymentStatus", "userId") VALUES ('7c284de5-c96a-4c91-92c0-1f17e0e8c7d2', 363, 'Refunded', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Payment" ("id", "totalAmount", "paymentStatus", "userId") VALUES ('f5de1387-d3c1-4a8a-bf66-ce6b174d99ac', 496, 'Pending', 'a3159a0e-16dd-4e0c-b3ea-7d63e634b914');
INSERT INTO "Payment" ("id", "totalAmount", "paymentStatus", "userId") VALUES ('adad20ef-8352-458b-9f99-2db48f64415d', 451, 'Pending', 'd024cf15-891b-4730-aefc-82af93207822');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
