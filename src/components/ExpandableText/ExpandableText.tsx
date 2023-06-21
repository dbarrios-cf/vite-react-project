import { ReactHTMLElement, useState } from "react";

interface ExpandableTextProps {
  children: React.ReactNode,
  shownChars?: number, 

}

function ExpandableText({children, shownChars = 20} : ExpandableTextProps) {
  const [isExpanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!isExpanded);
  }

  const isLongText = children && children.toString().length > shownChars;

  return (
    <>
      <p>
        { isExpanded && children ? children : `${children?.toString().slice(0, shownChars)}`}
        { isLongText && !isExpanded ? '...' : null}
        { isLongText
          ? (<>
              <button onClick={handleClick}>
                {isExpanded ? 'Show Less' : 'Show More'}
              </button>
            </>
            )
          : null

        }
        
      </p>
    </>
  )
}

export default ExpandableText;