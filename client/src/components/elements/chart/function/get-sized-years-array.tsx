interface yearsAndWidth {
  data: number[]
  width: number
}

export const getSizedYearsArray = ({data, width}: yearsAndWidth) => {

    const yearsArray = data
    const startYear = yearsArray[0]
    const endYear = yearsArray[yearsArray.length - 1]
    const cols = Math.floor((width || window.innerWidth) / 50)
    const dif = endYear - startYear
    const period = Math.floor(dif / cols)
    const sizedYearsArray: number[] = []
    for (let i = 0; i < cols; i++) {
        if (i === cols - 1) sizedYearsArray[i] = endYear
        else sizedYearsArray[i] = startYear + period * i
    }
    return sizedYearsArray
}