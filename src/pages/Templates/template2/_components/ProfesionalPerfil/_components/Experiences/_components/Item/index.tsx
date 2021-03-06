import { Tecnologies } from "../../../common"

export const Item = ({
  company,
  title,
  date: { start, end },
  summary,
  tecnologies,
}: any) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex justify-between font-bold">
        <div className="flex gap-[5px]">
          {/* company */}
          <div className="max-w-[120px]">{company}</div>

          <div>-</div>

          {/* title */}
          <div>{title}</div>
        </div>
        {/* date */}
        <div>
          {start} - {end}
        </div>
      </div>

      {/* summary */}
      <div>{summary}</div>

      {/* tecnologies */}
      <Tecnologies {...{ tecnologies }} />
    </div>
  )
}
