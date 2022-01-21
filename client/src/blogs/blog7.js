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

export default class blog7 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>
          The Starcoder: Talking Tech with Melody, a brilliant young programmer
          & non-profit founder
        </h1>
        <div style={{ marginTop: "12px" }}>
          Bian Lee • October 3, 2021 •{" "}
          <i>
            Interview with Melody Yu, a high school freshman programmer (USACO
            Platinum competitor) who founded Irvine Coding Club and Project
            Starcoder
          </i>
        </div>
        <br />
        <p>
          This is the story of Melody Yu, a competitive programmer (competes in
          USACO Platinum Division) who founded Irvine Coding Club and Project
          Starcoder. This accomplishment is extraordinary by itself, yet it’s
          even more impressive when you find out that she is only a high school
          freshman this year. In fact, she founded the two organizations when
          she was in middle school. Since discovering Irvine Coding Club myself
          a few weeks ago, I wanted to find out about her story. Despite the
          fact that it is run by middle school students, its professionalism and
          organizational skills seem comparable to that of a well established
          high school non-profit (or even exceed in some aspects). Clearly, she
          knows what she’s doing (also evident from this interview you'll soon
          read). Besides her involvement in the two of her own organizations,
          she also holds an Executive position at Competitive Programming
          Initiative, another organization dedicated to providing educational
          resources in competitive programming. (If you recall, I actually
          interviewed the founder of the CPI, Nathan Wang, two weeks ago).
          Seeing her as one of the team members of the CPI made me even more
          curious about her identity. Who is she? I decided to reach out to her
          for the interview and find out for myself.
          <br /> <br />
          <b>Bian Lee</b>: How and when did you first get into programming and
          how did you develop your skills over time?
          <br /> <br />
          <b>Melody Yu</b>: I got into programming pretty young learning basic
          languages like Python, but didn’t really pursue it until middle
          school. I took several courses like CS50 to learn the basics and also
          self-studied languages and data structures!
          <br /> <br />
          <b>Bian</b>: How did you discover competitive programming and what did
          it take develop problem solving skills?
          <br /> <br />
          <b>Melody</b>: While learning Python, I found how much I enjoyed
          programming. Once I learned a bit more (Java, HTML/CSS/Javascript) I
          started searching up coding competitions - where I found USACO! I did
          couple of questions and was fascinated by them, so I learned more
          about the contest. I picked up C++ and studied more data structures,
          and joined a study group with high school students doing USACO
          problems. This motivated me to learn and solve questions consistently
          for over a year. I'd always enjoyed doing puzzles and solving
          problems, so competitive programming combined my love of problem
          solving with algorithmic thinking.
          <br /> <br />
          <b>Bian</b>: It's really great that you discovered your passion at a
          young age! What are some tips you have for students aiming to reach
          the top and compete in the platinum division?
          <br /> <br />
          <b>Melody</b>: Build a solid foundation before you start solving
          problems. I would recommend finishing a data structures and basic
          algorithms course before seriously programming. That stays as a good
          foundation for algorithmic thinking and problem solving. It ends up
          saving a lot of time later on (maybe around Gold level) if you find
          the right mindset at the beginning. I also recommend finding a group
          of other students and solving competitive programming problems
          together because some problems become overwhelming and getting help
          from peers will speed up your learning process. Some online resources
          such as the usaco.guide, which are created and managed by top
          competitors of the world, are great to use!
          <br /> <br />
          <b>Bian</b>: I think that's certainly a great advice to beginner
          programmers or to those who wish to improve their skills particularly
          in competitive programming. Now, regarding your non-profit -- When and
          how did you found Irvine Coding Club? Could you describe what your
          motivations behind it were, and what you do in the organization?
          <br /> <br />
          <b>Melody</b>: I co-founded the Irvine Coding Club{" "}
          <a href="https://irvinecoding.club/about" target="_blank">
            (https://irvinecoding.club/about)
          </a>{" "}
          near the end of 2020. Through a competition called ACSL, I met my
          co-founder Agam Randhawa who also was interested in coding. We both
          wanted to start a coding club helping more students learn about
          coding, so the ICC was created. More people started joining, and they
          brought their interests with them too - math, debate, animation,
          arduino - and our club organized over 30 lecturers/teacher assistants
          to develop 9 courses that served over 200 students in one summer{" "}
          <a href="https://irvinecoding.club/summer2021" target="_blank">
            (https://irvinecoding.club/summer2021)
          </a>
          . We focus on bringing coding (and other topics!) to as many people as
          possible for free, and competing together in competitions (we do
          hackathons and other coding competitions!). In the 2021-2022 school
          year, we’re teaching bi-weekly free workshops on different topics!
          <br /> <br />
          <b>Bian</b>: That's really cool! What was your inspiration to start
          Starcoder? And did you build the website by yourself?
          <br /> <br />
          <b>Melody</b>: When I was learning math, I found Khan Academy’s online
          video resources useful, especially to self study and practice. At the
          level I was at for programming, I wasn’t able to find any similar
          resources. I made Project Starcoder to not only act as a sort of blog
          where I would explain and teach the problems I was solving at the
          time, but also to create something like Khan Academy that provided
          video resources for students. I did make the website (and art) myself!
          <br /> <br />
          <b>Bian</b>: You are an accomplished individual, and you obviously
          still have 4 years of high school ahead of you as a freshman this
          year. What are some of your goals you have and what do you wish to
          pursue in the coming years?
          <br /> <br />
          <b>Melody</b>: I definitely want to continue programming, and maybe do
          something useful for the world with it. I also really do enjoy
          teaching, and I want to be able to teach and reach more people and
          show them the use of coding. To be honest, I don’t have many set goals
          right now; I just want to enjoy life. I’d like to take more time to
          read books and pursue some other hobbies, and spend time with my
          friends to enjoy my high school life.
          <br /> <br />
          <b>Bian</b>: That definitely sounds like a good idea. What are your
          future plans for the three organizations that you are part of
          (Competitive Programming Initiative, Irvine Coding Club, and Project
          StarCoder)? Or do you have a plan to launch another project?
          <br /> <br />
          <b>Melody</b>: I’m incredibly proud to be a part of these
          organizations, and my main goal for all of them is to further them in
          any way I can. For the Competitive Programming Initiative, I want to
          further their outreach and allow the resources (i.e. USACO Guide) to
          reach more people. For Project StarCoder, my main focus is putting in
          more curriculum for an extensive website with usable knowledge for
          cataloguing my own programming knowledge, and hopefully being able to
          help people quickly find help in programming. Finally, for the Irvine
          Coding Club, I want to focus on reaching underprivileged children with
          courses and teaching.
          <br /> <br />
          <b>Bian</b>: What's the biggest takeaway or other important things you
          learned from your accomplishments so far, from your expertise in
          algorithmic programming, and running non-profits?
          <br /> <br />
          <b>Melody</b>: If you put enough time into something, you can succeed.
          From my (albeit very limited) experience in life, if you put in effort
          for a skill, the probability of its success goes up. Obviously with
          some things like hosting events and trying to get students or dealing
          with a rough member of an organization, there is no guarantee of
          success and sometimes you just don’t succeed - but the more effort you
          put in, the higher the probability of your success is.
          <br /> <br />
          <b>Bian</b>: That actually reminds me of Thomas Jefferson's quote that
          goes{" "}
          <i>I find that the harder I work, the more luck I seem to have</i>.
          What advice would you give to middle school students? I normally ask
          to give advice to high school students to other people I interview,
          but since you are a freshman, I think it makes the most sense to
          address it to middle school students.
          <br /> <br />
          <b>Melody</b>: You have the capabilities to do whatever you want. If
          you want to start an organization in middle school, you can. If you
          want to start competitive programming, you can. Even if you think
          people won’t take you seriously, try it out. In my experience,
          sometimes they will and that’s when it matters!
          <br /> <br />
          <b>Bian</b>: I think that's a great advice, one that would definitely
          be impactful to younger students. I always like to end the interview
          by asking a fun question, so here it is: What music do you listen to?
          <br /> <br />
          <b>Melody</b>: I honestly just listen to whatever my friends listen
          to, so that’s varied a lot. But I’m currently into musical soundtracks
          like Beetlejuice!
          <br /> <br />I find it incredible how there are some people who find
          passion at a young age, and follow through their goals with extreme
          determination that eventually results in accomplishments surpassing
          that of one's age and standard. When asked to give an advice, Melody
          emphasized that{" "}
          <i>You have the capabilities to do whatever you want</i>. While this
          isn't an uncommon saying and most people believe it to be true, I
          wonder if our mindset truly reflects upon it. When I was younger, I
          didn't think to explore anything new on my own, and I certainly wasn't
          striving for a certain set goal -- especially if it was out of my
          comfort zone. What sets Melody apart is her optimistic mindset and
          confidence in what she's good at, and the limitless goals she has set
          for herself, and works towards. I'm hopeful that a story like hers
          would inspire many younger students to realize that they too have much
          potential in them, and that there is no age restriction to learning.
          Even to a senior high school student like myself, it is quite
          inspiring, and it serves as a lesson to have big goals for yourself
          and put in the efforts everyday. I want to thank Melody for this
          interview, and I wish her the best for her time in high school!
        </p>
      </>
    );
  }
}
