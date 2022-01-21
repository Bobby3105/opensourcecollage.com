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

export default class blog3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>The Single Best Decision I Made in High School</h1>
        <div style={{ marginTop: "12px" }}>
          Bian Lee • September 6, 2021 •{" "}
          <i>How a small decision ended up changing my whole identity</i>
        </div>

        <p>
          <br />
          As a high school senior, I can now look back at the past three years
          and think of all the good (and some poor) decisions I’ve made that
          shaped the person I am today. I will eventually discuss most of those
          at some point on these blogs, so you can take them as advice and make
          better choices yourself if you are still an underclassmen. Today I’ll
          start with what I think is the most impactful decision I made in high
          school. Of course, I have another whole year ahead, and who knows how
          I’ll change by the time I graduate. Maybe the “best decision” is yet
          to come -- I can only hope.
          <br /> <br />
          But as far as what’s happened until now, I can say, without a doubt,
          that the best decision I made was joining our high school’s
          Cybersecurity Club in my sophomore year. The passion and involvement I
          had within this club surpasses that of many other clubs and
          organizations I’ve been part of. The experiences I gained from the
          club have helped me understand what I’m passionate about. I also feel
          like I made the most friends in the club (In fact, Pranav, who
          contributed to the development of Open Source Collage back in March,
          is a friend whom I got to know from having been on the same team in
          cybersecurity competitions). The club has definitely opened the door
          for me to get to know more people and build connections with peers who
          are all passionate about the same things. While “cybersecurity club”
          may not be as distinguished and well known as other clubs such as
          debate or science olympiads (which are all universally recognized in
          high schools all across the board), I still think I got the most value
          out of it. This blog is all about finding the right group of people,
          and focusing on your passions. Hopefully you can also find a school
          club that you know you truly belong in, where you can dedicate time
          into learning while having fun.
          <br /> <br />I joined the club the year it was founded at my school
          (my sophomore year). It had two co-founders, Sydney and Brian, and it
          was from Sydney I first heard about the club. She later told me that
          they had tried to establish the club the year prior, yet faced
          rejection (due to some unfortunate misconception by the ASB that
          “cybersecurity is the same as computer science”). They then had to
          prove how unique the club really is, and it was finally approved the
          next semester. I wasn’t really part of any other clubs at the time, so
          I decided I would join the meetings and see what cybersecurity is all
          about.
          <br /> <br />
          Believe it or not, despite now identifying myself as a pretty
          “tech-savvy” person, I didn’t know anything about computers nor coding
          in the beginning of my sophomore year. I don’t think I was even
          familiar with the term “cybersecurity.” My interest back then was far
          from learning how computers functioned. That soon changed once I
          joined the club to go to meetings and learn different things myself
          over time.
          <br /> <br />
          We all know club meetings during school hours are useless. All the
          exciting things happen outside the school. For speech and debate, this
          would be debate tournaments, for Model UN, it would be Saturday
          conferences. With Cybersecurity Club, it was participating in
          CyberPatriot, a nation-wide competition in which teams are tasked to
          find vulnerabilities in operating systems and secure them for points.
          The competition took place at a local community college (location
          doesn’t matter as long as teams can get together and have access to
          the target machines) and teams would work together within a six-hour
          window to gain as many points. There are three operating systems to be
          secured (Windows, Windows Server and Linux) as well as tasks on
          Cisco’s Packet Tracer (computer networking). The work would be divided
          among team members, and each person would specialize in a single task.
          I read somewhere describing CyberPatriot as a “complicated open book
          exam”, which I think captures the experience pretty well. Even though
          I knew close to nothing about cybersecurity initially, there wasn’t a
          barrier to entry to competing, since you could always search and try
          to brute force things, both of which were meant to be part of the
          learning process. Obviously, there were certain types of
          vulnerabilities that I wasn’t even aware that existed, which of course
          meant missed points and room for improvement (which is a good thing).
          <br /> <br />
          The first CyberPatriot season was certainly a lot of fun, and it was
          indeed a great learning experience. Our team, consisting of Nathan,
          Pranav and I, eventually did make it to the semifinals in the end. But
          overall, the competition was more about getting my feet wet in
          cybersecurity.
          <br /> <br />
          Following the CyberPatriot season, the club participated in National
          Cyber League (NCL), a competition that is focused primarily on more
          broader topics in cybersecurity rather than OS hardening only, like it
          was with CyberPatriot. This is what’s referred to as the jeopardy CTF
          (Capture The Flag), a game in which the goal is to obtain a “flag” or
          a string of letters that proves that you found hidden data through
          hacking techniques. This is where I got to truly explore subfields of
          cybersecurity, as the challenges were nicely divided into categories,
          such as cryptography, password cracking, web application analysis,
          open source intelligence, log analysis, etc. The very best thing about
          it was the fact that the team could extend up to 8 members, making the
          collaboration work more fun and the accomplishments more satisfactory.
          Long Live <i>Henry is God</i> !
          <br /> <br />
          The title of this blog post suggests that joining the cybersecurity
          club was the single, absolute best decision I made. That’s completely
          true, because it influenced my future in many ways. Had I not joined
          the club, I would have never gotten the chance to make friends with
          Pranav, Nathan, Brian, Sydney, Ellie, Brad, Nicholas, and Jeffrey. I
          would not have taken Java programming, five IT classes, and get ITF+
          certification. I would not have gotten into web development to build
          full stack applications like this nor would I have considered studying
          AP Computer Science. I wouldn’t have known what “cryptography” is and
          my main OS would still be Windows (: D). I would not have volunteered
          at SoCalCCCC, and place third in the Socal Cyber Cup team game. I
          wouldn’t have chosen to attend Cal Poly’s cyber camp or visit
          Vandenberg Space Force with Brian and Brad. Joining the club opened up
          so many different opportunities in technology that I’d essentially
          built my whole identity on for the past two years.
          <br /> <br />I think a good lesson is to take advantage of given
          opportunities, and to try new things every now and then. Simply
          joining the cybersecurity club out of curiosity one day turned out to
          be one of the most important, impactful decisions I had made in my
          life.
          <br /> <br />
          At this point, you may wonder whether I’m firmly determined to pursue
          cybersecurity in the future, and the answer to that, actually, is that
          I’m not. While I definitely enjoyed everything that I’ve just
          described, I’m more interested in studying engineering than anything.
          Regardless of what I do in the future, I’m sure my cybersecurity & IT
          experience won’t ever be worthless.
          <br /> <br />
          With the year left, my goal (as vice president) is to ensure other
          students can enjoy cybersecurity activities as much as I did and gain
          positive experience from it. If you are involved in a school club that
          you’re extremely passionate about, be sure to let me know in the
          comments!
        </p>
      </>
    );
  }
}
