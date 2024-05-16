import awsLite from '@aws-lite/client'

export async function handler (req) {
  let aws = await awsLite({
    plugins: [ import('@aws-lite/ssm') ],
    region: 'eu-central-1',
    debug: true
  })
  let ssm
  for (let i = 0; i < 100; i++) {
    console.log(`run:`, i)
    ssm = await aws.ssm.GetParametersByPath({
      Path: '/Lite127Staging',
      Recursive: true,
      paginate: true,
    })
  }
  console.log({ ssm })
  return ssm
}
