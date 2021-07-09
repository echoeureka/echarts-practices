import faker from 'faker/locale/zh_CN'

interface IPostVolumeItem {
  date: string
  postCnt: number
  acceptCnt: number
}

const fakeLineChartData = (): IPostVolumeItem[] => {
  const res: IPostVolumeItem[] = []
  for (let i = 0; i < 22; i++) {
    const fakeData = faker.date.between('2021-04-19', '2021-07-10')
    res.push({
      date: `${fakeData.getFullYear()}-${fakeData.getMonth()}-${fakeData.getDate()}`,
      postCnt: faker.datatype.number(120),
      acceptCnt: faker.datatype.number(24)
    })
  }
  return res
}

export default fakeLineChartData
