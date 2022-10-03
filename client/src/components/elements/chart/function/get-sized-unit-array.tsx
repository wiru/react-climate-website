interface yearsAndHeight {
  data: number[]
  height: number
}

export const getSizedUnitArray = ({ data, height }: yearsAndHeight) => {

  const unitArray = data
  const startUnit = unitArray[0]
  const endUnit = unitArray[unitArray.length - 1]
  const cols = Math.floor((height || window.innerHeight) / 50)
  const dif = endUnit - startUnit
  console.log("DIF", dif)
  const period = Math.floor(dif / cols)
  const sizedUnitArray: string[] = []
  for (let i = 0; i < cols; i++) {
    if (i === cols - 1) sizedUnitArray[i] = endUnit.toPrecision(2)
    else sizedUnitArray[i] = ((endUnit / cols) * (i+1)).toPrecision(2)
    console.log(sizedUnitArray[i])
  }
  console.log("ORCCCCS", sizedUnitArray)
  return sizedUnitArray
}