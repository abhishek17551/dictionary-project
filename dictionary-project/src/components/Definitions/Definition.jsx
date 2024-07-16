import React from 'react'
import './Definition.css'

const Definition = ({word,category,meanings}) => {
  return (
    <div className='meanings'>
        {
            word === "" ? <span className='subtitle'>Start by typing a word in Search</span> : (
                meanings.map((item) => (
                    item.meanings.map((value) => (
                        value.definitions.map((def) => (
                            <div className='singleMeaning'  style={{ backgroundColor: LightTheme ? "#3b5360" : "wheat",color: LightTheme ? "wheat" : "black"}}>
                                <b>{def.definition}</b>
                                <hr style={{ backgroundColor: "black", width: "100%" }} />
                                {
                                    def.example && (
                                        <span>
                                            <b>Example :</b> {def.example}
                                        </span>
                                    )
                                }
                                {
                                    def.synonyms && (
                                        <span>
                                            <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                                        </span>
                                    )
                                }
                            </div>
                        ))
                    ))
                ))
            )
        }
    </div>
  )
}

export default Definition