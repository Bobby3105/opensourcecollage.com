import React from "react";
import "../style.css";
import "../markdown-styles.module.css";
import axios from "axios";

import firebase from "firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

export default class blog5 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>
          Is Dual Enrollment Worth it? Ranking and Evaluating Every Community
          College Class I Took So Far
        </h1>
        <div style={{ marginTop: "12px" }}>
          Bian Lee • September 12, 2021 •{" "}
          <i>Community college classes to take (or avoid) if you dual-enroll</i>
        </div>

        <p>
          <br />
          Dual enrollment is a program that allows high school students to
          enroll at a local community college and take classes there while
          simultaneously completing regular high school coursework. Many
          students are part of this program, in fact, 12.6 percent of public
          high school students in California have taken one or more community
          college classes while in high school. (At my school, it seems most
          people do it). While the classes are not regarded as academically
          rigorous in comparison to Advanced Placement (AP), it is still a great
          way to learn certain subjects that you wouldn’t otherwise get a chance
          in regular high school curriculum, and in some cases you can even
          transfer few credits to four-year college if you go to a in-state
          school after graduation. Over the past three semesters (Fall 2020,
          Spring & Summer 2021), I took 15 classes in three different community
          college institutions. Some were academic (ex: biology, psychology),
          while others were practical (ex: Linux), but all in all I took them
          for my educational development and to explore different areas of
          study. I was actually planning to take classes this semester as well,
          but because enrollment priority was given to actual college students,
          I ended up having to waitlist and not get into the classes I wanted to
          take. Regardless, in this post I rank and evaluate every community
          college class I’ve taken, and discuss the pros and cons of dual
          enrollment.
          <br /> <br />
          Before I start, I should make it clear that I didn’t factor in the
          quality of professors when I ranked these classes. Every professor I
          had was pretty amazing; they were all extremely knowledgeable about
          what they were teaching, and were all very helpful when I did reach
          out for help. I could probably give every professor a 4 or 5 on
          ratemyprofessors.com. (I actually did rate one professor that was
          particularly great). The rankings are solely dependent on the course
          curriculum and how it was designed, and whether the time I spent
          learning the materials were valuable or not. On that note, let’s jump
          right into the ranking (from worst to best).
          <br /> <br />
          <b>#15. ENTR 200 - Pathway to Success</b> (Summer 2021, Irvine Valley
          College)
          <br />
          This was a single-credit class that I took in which I learned
          absolutely nothing. It was supposed to be an entrepreneurship class
          that teaches you to plan for the future financially, and learn habits
          and mindset that creates successful entrepreneurs. There was an
          assigned reading on a book <i>Who Owns the Ice House</i> by Clifton
          Taulbert every week, and students were to complete worksheets along
          with the reading. While the book had a good message about having a
          growth mindset and following certain work ethics, everything about it
          was fairly obvious and there was nothing new to learn. Somehow, for a
          single unit class, it had quite a number of assignments every week
          which I found too dull and boring that I always procrastinated on. The
          assignments were easy and were essentially based on completion (and
          not accuracy) and I waited until the very last minute to do them,
          having to submit some late few times and only get half a credit.
          Worse, because I turned in a few assignments late, I had to do extra
          credit assignments to make sure I end up with an A, which was even
          more boring work. (I ended up not actually needing the extra credits,
          but I guess I did them just to play safe).
          <br /> <br />
          <b>#14. CIS 111 - Introduction to Information Systems</b>
          (Summer 2021, Fullerton College)
          <br />
          This was a four unit class, but I did less work than ENTR 200. This is
          probably because I had already taken CIM 160, CIM 161, CIM 110, CIM
          115 by then, and was therefore already familiar with all information
          technology terms and practices. I don’t even understand why I chose to
          take this class, I was already pretty bored with learning any more IT.
          <br /> <br />
          <b>#13. PSYC 1 - Introduction to Psychology</b> (Summer 2021,
          Saddleback College)
          <br />I don’t particularly understand why I didn’t enjoy learning
          introductory psychology, but I simply didn’t. I actually had high
          expectations so it was a little disappointing to see that I didn’t
          like it too much. While I placed it pretty low in this ranking, I
          could see others liking it. It has more to do with personal lack of
          interest in the subject, rather than dissatisfaction with the course
          outline.
          <br /> <br />
          <b>#12. BUS 186 - Funding Special Projects and New Ventures</b>{" "}
          (Summer 2021, Fullerton College)
          <br />A brief, light work, single unit class. I actually found this
          class pretty helpful, because I was able to receive feedback on my
          proposed business model, which happened to be, you guessed it, Open
          Source Collage. At the beginning of the semester, every student chose
          a business, non-profit, or other cause that would require funding
          (raising money). Throughout the semester, we had different mini
          projects that all related to the idea of pitching a business /
          non-profit idea to investors for monetary investment. For the final
          project, we had to give a Pecha Kucha presentation, a fast-paced
          20-slide presentation that introduced our idea and why it had
          potential for growth (thus asking for funding).
          <br /> <br />
          <b>#11. CIM 161 - Systems and Network Administrator (Linux)</b> (Fall
          2020, Irvine Valley College)
          <br />I took this class to develop my knowledge and skills in Linux,
          an operating system that’s widely used for server and cloud computing.
          I personally have been using Ubuntu LTS for my personal desktop
          computer, so I figured it would be helpful to get basic command and
          scripting skills to get around within the operating system. The class
          was project-based, and most of the projects were about configuring
          different Linux OSes, and how to set it up for different purposes
          (such as running web servers, databases, compiling source code, etc).
          Pretty useful class.
          <br /> <br />
          <b>#10. CIM 110 - Information and Technology Essentials</b> (Fall
          2020, Irvine Valley College)
          <br />
          This was a fast-paced 4 unit class that taught all essential
          information technology, from computer components, programming
          concepts, computing models, and security. I did learn a lot, and it
          was pretty useful for furthering my general understanding of how
          computing devices work.
          <br /> <br />
          <b>#9. MATH 152 - Calculus II</b> (Spring 2021, Fullerton College)
          <br />I did quite well in the first semester of calculus (Calculus I)
          so I expected the same for this class. It ended up becoming the first
          math class that I actually struggled in. It started out fine, but by
          the time I got to the Series I really had difficulty understanding all
          the new materials. I had planned to take multivariable calculus the
          next semester, but I ended up deciding against the idea, given that I
          had already forgotten so much of the Calculus II material right as I
          completed the class. But I am ranking the class higher than others,
          because I guess knowing calculus is <i>INTEGRAL</i> to all STEM
          fields.
          <br /> <br />
          <b>#8. CIM 115 - Databases</b> (Spring 2020, Irvine Valley College)
          <br />
          As a web developer, I configure and manage databases. This class gave
          me direct useful knowledge, because I was introduced to different
          concepts in databases (such as schema, queries) that would actually be
          implemented in web projects I build (Not so much for Open Source
          Collage since this platform uses an unorthodox document database, but
          definitely useful for other projects). I also got the chance to learn
          basics of SQL database language, which I would have never considered
          learning myself.
          <br /> <br />
          <b>#7. CIM 160 - Computer Network Fundamentals</b> (Fall 2020, Irvine
          Valley College)
          <br />
          Although computer networking can be complex and many concepts are
          obscure, I think it’s pretty fascinating to learn about how different
          technologies come together to establish the world wide web and
          internet we have today. I found the class pretty useful to me
          directly, especially learning about server-client models and how
          domain name systems work, which are components of web development. I
          think this class could also be great for business students, since it
          teaches different network topologies that are suitable for each
          business model and office space.
          <br /> <br />
          <b>#6. BUS 162 - Business Economics</b> (Summer 2021, Fullerton
          College)
          <br />
          Definitely one of the most enjoyable classes I took. I like the
          economy, by the subject itself, and it was even better that it was
          tied into how different economic views play a role in politics, which
          is something I’m interested in knowing more about. I don’t exactly
          understand why it is in the Business Department, however, because the
          class taught essential concepts in economics and didn’t really apply
          to business or entrepreneurship.
          <br /> <br />
          <b>#5. MATH 151 - Calculus I</b> (Fall 2020, Fullerton College)
          <br />
          Back when calculus made sense...
          <br /> <br />
          <b>#4. BIO 3 - Humans and the Biological World</b> (Summer 2021,
          Irvine Valley College)
          <br />I took two biology classes over the Summer 2021 semester, both
          of which I thoroughly enjoyed. After a year of chemistry (probably the
          only subject I truly hate with passion) at my high school, studying
          biology was a breeze. Unlike chemistry, everything made sense.
          <br /> <br />
          <b>#3. BIO 1 - Life Sciences</b> (Summer 2021, Irvine Valley College)
          <br />
          BIO 3 and BIO 1 had pretty much the same introductory biology topics,
          except that BIO 1 left out anatomy and biological processes in the
          human body. I’m not a big fan of memorizing human body parts, so this
          class was slightly better than the former.
          <br /> <br />
          <b>#2. ARCH 111 - Introduction to Architecture</b> (Summer 2021,
          Fullerton College)
          <br />A ton of fun. Because it was all project-based (besides lectures
          on history of architecture and architectural vocabularies), it had the
          most assignments and required the most time commitment. Yet I actually
          really enjoyed doing the work. I learned to make 3D models in
          SketchUp, draw interior layouts of a house, sketch obelisks, and
          construct a house out of a cereal box. If you know me well, you
          probably already know how much I like visiting new places and
          observing cool architectures. From this class I learned about the
          unique architectural elements of each civilization throughout history,
          the history behind notable, well-known buildings, as well as
          construction & design techniques. Besides a few sketches, the class
          didn’t require much drawing (by hand), which was nice since I don’t
          have much artistic talent.
          <br /> <br />
          <b>#1. ASTR 20 - General Astronomy</b> (Spring 2020, Irvine Valley
          College)
          <br />
          The single best class of all. As an introductory astronomy class, it
          didn’t go in depth into physics and math, and instead everything was
          concept based. I was quite fascinated by everything I learned, and I’m
          sure most people in the class felt the same way.
          <br /> <br />I would definitely recommend dual enrollment to other
          high school students. Even if I did dislike certain classes, at least
          I found out that I don’t like the subject. Completing each class made
          me feel like I became a slightly more worldly and educated person. The
          overall experience was really great in helping me discover interests
          and things I’m passionate about, and also of course at developing
          better work ethics and learning to become more productive. If you are
          a high school student unsure of what you want to pursue in the future,
          the first thing you should do is to learn as many things as you can
          and explore various different fields. I <i>gained</i> something
          valuable from each and every class I took (even ENTR 200!), small or
          big, and that's what makes dual enrollment worth it.
        </p>
      </>
    );
  }
}
