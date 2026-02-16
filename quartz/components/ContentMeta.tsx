import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      // -------------------------------------------------------------------
      // [수정된 부분] 작성일과 수정일을 분리해서 표시하는 로직
      // -------------------------------------------------------------------
      if (fileData.dates) {
        const created = fileData.dates.created
        const modified = fileData.dates.modified

        // 1. 최초 작성일 (항상 표시)
        if (created) {
          segments.push(
            <span>
              최초 작성일: <Date date={created} locale={cfg.locale} />
            </span>
          )
        }

        // 2. 마지막 수정일 (작성일과 다르면 표시)
        // 주의: 파일의 date와 updated 시간이 완전히 똑같으면 이 부분은 안 보임!
        if (modified && created && modified.getTime() !== created.getTime()) {
           segments.push(
            <span>
              마지막 수정일: <Date date={modified} locale={cfg.locale} />
            </span>
          )
        }
      }
      // -------------------------------------------------------------------

      // 읽는 시간 (설정에서 켜져있으면 표시됨)
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor