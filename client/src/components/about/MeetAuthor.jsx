import React from 'react';
import AuthorImg from '../../assets/author.jpeg';

const MeetAuthor = () => {

  return (
    <main id='about' className='mt-60'>
      <img className='w-[300px] h-[400px] object-contain border-2 rounded-full transition-transform hover:scale-110' src={AuthorImg} alt="" />
      <p className='mt-6 w-4/5 m-auto leading-relaxed'>Where do I begin? I guess I should first introduce myself. My name is M. D. Golden, and I have failed at most things in my life. The only things I have ever been good at is writing and being a parent. Since being a single parent doesn’t pay, becoming a successful author was really my only option when it came to making a decent living. To me, being successful simply means I can pay my bills and take some time off here and there. As of right now, the 14th of July in the year 2019, I am unable to do that. I hope things start to work out better the more I write.
        <br /><br />
        I have had a love for writing for many years. It all started when I was in the 4th grade. My science teacher wanted our class to write a short story about rain. She handed us little pieces of paper that were cut out in the shape of raindrops, and my imagination began to work. I wrote a short story about a raindrop that was experiencing what it was like to fall from the clouds for the first time. He was separated from his mother, who was also a raindrop, and trapped in a glass container. He then was lifted back through the sky and reunited with his mother in the clouds. I was very proud of this piece of writing. It was my first attempt at any fictional writing. The next day we had to read our stories out loud in class. After reading mine, which was very different from my classmates, I did not receive any praise from my teacher or applause from my class, but I was still proud of myself. I knew it was good.
        <br /><br />
        For a few months after, I continued to write very short stories. I wrote a piece on a wig that was found at a thrift store. It told the story about who had owned it and where it had traveled. I continued down this path for a while until my young mind got bored. I suffered from ADD and wasn’t able to sit still for very long. I put aside my writing for many years and focused on other things in my life. These things were mostly making friends and doing decent in school. Sometime in my high school years, I began to pick up my writing again. I believe the interest in writing started again when my brother gave me my first real novel, The Gunslinger, when I was in middle school, and the free time I gained my junior year of high school finally allowed me to start writing again.
        <br /><br />
        I worked three years on a novel I will probably never publish, but it showed me what I was capable of. I have always loved to write. Losing myself inside a story that my characters take on is the only time I feel at home. I hope to be able to make this my life and share the stories that are locked inside my mind with a fanbase that can truly appreciate the struggles that my characters face. I also want to put myself in a place that will allow me to help new authors. In today’s world of self publishing and traditional publishers that do so little for the writer, it can be hard to make it. I want to share my experiences and successes with new authors and help them find a way to make it themselves. </p>
    </main>
  );
};

export default MeetAuthor;
