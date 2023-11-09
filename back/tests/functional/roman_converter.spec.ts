import { test } from '@japa/runner'

test.group('Roman converter', () => {
  test("get arabic 1 converted to roman 'I'", async ({ client }) => {
    const userInput = 1
    const response = await client.get(`/api/roman/${userInput}`)

    response.assertStatus(200)
    response.assertBodyContains({ roman: 'I' })
  })
})
