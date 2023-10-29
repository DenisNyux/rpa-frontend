type LineSeparatedHeaderProps = {
    headerTitle: string,
    headerColor: string,
    className?: string
}
function LineSeparatedHeader({headerColor, headerTitle, className}: LineSeparatedHeaderProps) {
  return (
    <div className={`${className ? className : ''} flex flex-col gap-5 mb-5`}>
        <h4 style={{color: headerColor}} className="font-bold	lg:text-xl">{headerTitle}</h4>
        <hr />
    </div>
  )
}

export default LineSeparatedHeader