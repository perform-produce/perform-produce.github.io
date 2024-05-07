import { COLORS } from '../../constants/styleConstants'
import Section from '../section/section'
import SectionSubhead from '../section/sectionSubhead'
import Paragraphs from '../common/paragraphs'
import RulerSection from './rulerSection'
import PullQuote from '../interview/pullQuote'
import { useMemo } from 'react'
import apiServices from '../../services/apiServices'
import useApi from '../../hooks/useApi'
import parserServices from '../../services/parserServices'
import InterviewIntro from '../section/interviewIntro'

const rulerWidths = [1, 2.25, 2, 2.25, 1, 3.25, 1.75, 4, 0.75]

const DougScottsRulers = ({ content }) => {
  const data = useApi(content, apiServices.getDougScottsRulers)
  const { sectionId, title, entries, loading } = data

  const { parseWithNoSpan, stripParagraph } = parserServices

  const memoizedComponents = useMemo(() =>
    entries?.map(({ description, units, purpose, details, src, alt }, i) =>
      <RulerSection
        key={i}
        index={i}
        src={src}
        alt={alt}
        width={rulerWidths[i]}
        description={stripParagraph(description)}
        units={stripParagraph(units)}
        purpose={stripParagraph(purpose)}>
        {parseWithNoSpan(details)}
      </RulerSection>
    ), [entries])

  return (
    !loading &&
    <Section
      id={sectionId}
      header={parserServices.parseTitleWithName(title)}
      backgroundColor={COLORS.GREEN}>
      <InterviewIntro content={data} />
      {memoizedComponents}
    </Section>
  )
}


export default DougScottsRulers