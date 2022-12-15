const Author = () => {
    return (
        <div>
            <div className="flex">
            <h2 data-aos="flip-right" id="author-header">Who is Mark Manson?</h2>
            </div>
            <div id="author" ></div>
            <img data-aos="flip-left" id='mark1' src="src/assets/manson1.png" alt="Mark Manson" />
            <article>
                <div className="flex">
                <p data-aos="flip-right" id="about-mark">Mark Manson is an American self-help-self-proclaimed-psychologist-humor-writer and blogger. Bloggling life advice was all he really did out of college, but
                    in a few years, he started writing books as well. He wrote for fun and tried to be helpful.
                    Manson writes for adults who desire for self-improvement. 
                    The reason for this is that he wants to give self-help advice while being humorous because he thinks 
                    advice is best presented in a fun manner.
                    In his books, he depicts situations using profanity to make the text engaging with a serious outlook at the end.
                </p>
                </div>
                <p data-aos="flip-left" id="quote"><i>"Life advice is most effective when it’s fun and unpretentious"</i></p>
            </article>
        </div>
    )
}
export default Author;