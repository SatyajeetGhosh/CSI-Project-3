import React from 'react'
import Item from './Item';
import '../components/courses.css';

export default function Courses() {
  function Course( url, Educator, Title) {
    this.url = url;
    this.Educator = Educator;
    this.Title = Title;
  }
  let courses=[];
  let c=new Course('https://www.youtube.com/watch?v=kUMe1FH4CHE','freeCodeCamp','HTML');
  courses.push(c);
  c=new Course('https://www.youtube.com/watch?v=OXGznpKZ_sA','freeCodeCamp','CSS');
  courses.push(c);
  c=new Course('https://www.youtube.com/watch?v=PkZNo7MFNFg&t=25s','freeCodeCamp','JavaScript');
  courses.push(c);
  c=new Course('https://www.youtube.com/watch?v=bMknfKXIFA8','freeCodeCamp','React');
  courses.push(c);
  c=new Course('https://www.youtube.com/watch?v=3qBXWUpoPHo','freeCodeCamp','Angular');
  courses.push(c);
  c=new Course('https://www.youtube.com/watch?v=Oe421EPjeBE','freeCodeCamp','Node.js');
  courses.push(c);

  return (
    <>
      <div className="courses">
        <h1>Courses</h1>
        <div className="container">
          {courses.map((element) => {
            return (
              <div className="box">
                <Item
                  title={element.Title}
                  edu={element.Educator}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
      

    </>
  );
}
