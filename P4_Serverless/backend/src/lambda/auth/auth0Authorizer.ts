import { CustomAuthorizerEvent, CustomAuthorizerResult } from 'aws-lambda'
import 'source-map-support/register'
import { JwtPayload } from '../../auth/JwtPayload';
import { verify } from 'jsonwebtoken'



const cert = `-----BEGIN CERTIFICATE-----
MIIDBzCCAe+gAwIBAgIJH/gNJSpS7WV+MA0GCSqGSIb3DQEBCwUAMCExHzAdBgNV
BAMTFmJhZGppLWRldi5ldS5hdXRoMC5jb20wHhcNMjAwODE0MTgyMjQ5WhcNMzQw
NDIzMTgyMjQ5WjAhMR8wHQYDVQQDExZiYWRqaS1kZXYuZXUuYXV0aDAuY29tMIIB
IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA49A+ZzHx4satAqMk3SHOSf7P
cbZlmfL+XugP7T0dhFbp70SsdMvj8gysvBQeqt0UH77RY9JE24Xi/qbDbe3qbcNM
oGu5AUK7flBxA/IbeAQRznv/PtA/HZxFuo3eGaZojvHQDx4NJdJZZK8lDP9wY7LN
7cLKDwjksvz6tcapVyLgJmz8AfQLaa4lrlWUbclY0M/w2OwGfLJUWhxkKt/f+Ipu
LyqN+WrTrts3QONbFHOeMSW8WyKpO1gXyXihOqHlRwwHQXFQz4ZVYCEYoLPniMGS
6BuLIwIEfqdjmRrKjMpoh+yCNV2HqKfF5se0YXAeAgZof3alOChfk9NJewBg3QID
AQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQ5CKeaV5WFMl4oY6KS
Z5NR1wlWLzAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEBAIzW9AGT
5TBauIHooznScBIOyxkCMeDw04MN0yh4cp0HWy6FhnC5sQi5iJl77w7CBdVmPelr
7yc9piUlWVENLauM/VzxMMByczVzcZ0kxMwSAH1TkKm73unxXFwu85CL36tRZxuq
HYTSV5bswY50I6bjhBLuZrC0+imOTSPOAy8NrQBjWSBgUe3Z8ijnIGB4KxFt0C3n
bZOu5RBZEDbMZ6XHrS71KTkzOy6F2rRz+XU7/9E/SHlFD2dPdvHo/jer5cCPPzMp
CUaWFozC/LwlQMYCakHVIQLBqbCwLu4BCmAOx48BeOz1F6BUAWYnPSRr1+FAQBqN
d9DyglLel8wwOZU=
-----END CERTIFICATE-----`



export const handler = async (event: CustomAuthorizerEvent): Promise<CustomAuthorizerResult> => {
  try {
    const jwtToken = verifyToken(event.authorizationToken)
    console.log('User was authorized', jwtToken)

    return {
      principalId: jwtToken.sub,
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Allow',
            Resource: '*'
          }
        ]
      }
    }
  } catch (e) {
    console.log('User authorized', e.message)

    return {
      principalId: 'user',
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Deny',
            Resource: '*'
          }
        ]
      }
    }
  }
}

function verifyToken(authHeader: string): JwtPayload {
  if (!authHeader)
    throw new Error('No authentication header')

  if (!authHeader.toLowerCase().startsWith('bearer '))
    throw new Error('Invalid authentication header')

  const split = authHeader.split(' ')
  const token = split[1]

  return verify(token, cert, { algorithms: ['HS256'] }) as JwtPayload
}