import parserServices from '../../services/parserServices'
import Paragraphs from '../common/paragraphs'
import PullQuote from '../interview/pullQuote'
import SectionSubhead from './sectionSubhead'


const InterviewIntro = ({ content }) => {
  const { subtitle, interviewee, pullQuote, intro } = content
  const { parseWithNoSpan } = parserServices
  return (
    <>
      <SectionSubhead
        subheader={parseWithNoSpan(subtitle)}
        interviewee={interviewee} />
      <PullQuote header={parseWithNoSpan(pullQuote.title)} pageNumber={pullQuote.pageNumber}>
        {parseWithNoSpan(pullQuote.body)}
      </PullQuote>
      {intro &&
        <Paragraphs $end={13}>{parseWithNoSpan(intro)}</Paragraphs>}
    </>
  )
}

export default InterviewIntro