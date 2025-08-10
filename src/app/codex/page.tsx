import BackButton from "@/components/SharedComponents/BackButton/BackButton"
import RoundSquareLink from "@/components/SharedComponents/RoundSquareLink/RoundSquareLink"
import { layout, spacing, typography, responsive } from "@/styles/tailwindClasses"

async function Codex() {
  return (
    <div className={layout.pageContainerCentered}>
      <div className={layout.fullWidth}>
        <BackButton href="/" text="На главную" />
      </div>
      <h2 className={`${spacing.mt6} ${spacing.mb6} ${layout.fullWidth}`}>Устав РПА</h2>
      <span className={`${typography.textBase} ${layout.flexCol} ${spacing.gap3} ${responsive.tablet.textXl} ${layout.fullWidth}`}>
        На данной странице вы можете ознакомиться с уставом РПА
      </span>
      <div className={`${layout.halfWidth} ${spacing.mt6} ${responsive.tablet.wFull}`}>
        <RoundSquareLink linkTitle="Устав" url={`${process.env.API_URL}/uploads/Ustav_RPA_5bb09f0cf5.pdf`} />
      </div>
    </div>
  )
}

export default Codex