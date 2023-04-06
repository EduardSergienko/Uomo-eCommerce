import styles from './FaqContent.module.scss';
import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { questions } from 'data/faqQuestions';
// import { CSSTransition } from 'react-transition-group';
export default function FaqContent() {
  const [showAnswer, setShowAnswer] = useState({});

  function toggleAnswer(question) {
    setShowAnswer({
      ...showAnswer,
      [question]: !showAnswer[question],
    });
  }
  return (
    <section className={styles.faqSection}>
      <div className={styles.faqWrap}>
        <h1 className={styles.faqTitle}>FREQUENTLY ASKED QUESTIONS</h1>
        {questions.map(item => {
          return (
            <div key={item.title} className={styles.faqBox}>
              <h2>{item.title}</h2>
              <ul className={styles.faqList}>
                {item.data.map(item => {
                  return (
                    <li
                      key={item.id}
                      className={styles.item}
                      onClick={() => toggleAnswer(item.id)}
                    >
                      <div
                        style={
                          showAnswer[item.id]
                            ? { borderBottomColor: '#222222' }
                            : {}
                        }
                        className={styles.question}
                      >
                        <p>{item.question}</p>
                        {showAnswer[item.id] ? <BiMinus /> : <BsPlus />}
                      </div>

                      {showAnswer[item.id] && (
                        <p className={styles.answer}>{item.answer}</p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
