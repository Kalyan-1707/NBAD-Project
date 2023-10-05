const connections= [
    {
        "Category":"Technology",
        "data": [{
          "id": "58412808-4ef4-4833-81b4-df7d59ec8421",
          "title": "Bringing blockchain to tech enthusiasts",
          "category": "Technology",
          "host": "Pulse Technology",
          "pic": "https://i.ytimg.com/vi/teol3sxMKLo/maxresdefault.jpg",
          "location": "1426 E 4th St · Charlotte, NC",
          "date": "2023-09-29",
          "start": "14:00",
          "end": "18:00",
          "descTitle": "Agenda Highlights:",
          "description": "\n <b>Keynote Address:</b> Dive into the fundamentals of blockchain\n technology and discover its real-world applications.<br>\n              <b>Panel Discussions:</b> Engage with industry experts, thought\n              leaders, and enthusiasts as they discuss the current state and\n              future trends of blockchain technology.<br>\n              <b>Interactive Workshops:</b> Get hands-on experience with\n              blockchain tools and platforms.<br>\n              <b>Networking Opportunities:</b> Connect with like-minded\n              individuals, entrepreneurs, and professionals passionate about blockchain technology. Q&amp;A Sessions:</b> Ask your burning questions to our panelists\n              and experts.\n            "
        },{
          "id": "2289d5ba-9c0e-4e30-91eb-9da1994f2911",
          "title": "Tech Career meetup for Networking",
          "category": "Technology",
          "host": "Mr. Thomas P. from People Inc.",
          "pic": "https://www.profocustechnology.com/wp-content/uploads/2017/02/tech-meetup.jpg",
          "location": "Online event (Link visible for attendees)",
          "date": "2023-09-26",
          "start": "19:00",
          "end": "20:00",
          "descTitle": "Why Attend?",
          "description": "<b> Networking Opportunities:</b> Connect with like-minded tech enthusiasts, industry professionals, and potential mentors who can help you navigate your career journey. Career Insights: Gain valuable insights from experienced speakers and panelists who will share their success stories, career tips, and industry trends.<br> <b>Job Opportunities: Discover job openings and internship opportunities from top tech companies actively looking for talent.<br> <b>Professional Development: Workshops and breakout sessions will offer practical skills and knowledge to help you excel in your tech career. Resume Reviews: Bring your resume for expert feedback and tips on how to make it stand out to potential employers."
        },
        {
          "id": "954c1278-9dc0-477d-89af-2b8e59c37a60",
          "title": "How to crack tech interviews with ease?",
          "category": "Technology",
          "host": "P.X. Technology",
          "location": "Queen Park Social, 4125 Yancey Road · Charlotte, NC",
          "pic": "https://blog.codingblocks.com/content/images/size/w2000/2019/05/1_TPLG-Et63ALYKQ55u8CZYQ.jpeg",
          "date": "2023-09-27",
          "start": "19:00",
          "end": "21:00",
          "descTitle": "Agenda",
          "description": "<b>Expert Panel Discussion:</b> Hear from seasoned professionals and recruiters who",
        }
      ],
        },
        {
         "Category":"Health & Wellness",
         "data":[{
          "id": "a3a88a83-79be-48f9-9285-f9eef3675c48",
          "title": "Speak With Confidence! - How to speak",
          "category": "Health & Wellness",
          "host": "Simba N",
          "pic": "https://www.maroonoak.com/wp-content/uploads/2016/05/Public-speaking-with-confidence.jpg",
          "location": "Online event (Link visible for attendees)",
          "date": "2023-09-12",
          "start": "19:30",
          "end": "21:00",
          "descTitle": "Details",
          "description": "Does your confidence waiver when speaking? Maybe it's in a social, professional, or romantic interaction, where being confident is pivotal to your success. Confidence is expressed almost entirely through your body language. Body language or non-verbal behaviour refers to the way you talk, walk and move. This information tells the world how confident you feel about yourself and therefore how the world should treat you. By the end of this meetup, you will:<ul><li>Learn key principles to build your confidence capacity</li><li>Become aware of barriers to your confidence</li><li>Have tools to overcome barriers to your confidence</li></ul>"
        },
        {
          "id": "f7429b35-92af-4764-a12b-73d052b9eef3",
          "title": "Yoga in the park",
          "category": "Health & Wellness",
          "host": "Pooja",
          "pic": "https://static.toiimg.com/thumb/92353710.cms?width=680&height=512&imgsize=14294",
          "location": "LINCOLN HARBOR PARK 1500 Harbor Boulevard · WEEHAWKEN, NJ",
          "date": "2023-09-10",
          "start": "16:00",
          "end": "18:15",
          "descTitle": "Details",
          "description": "We are providing a donation based yoga class where everyone is welcome no matter what the age, color, religion, gender. We will cover joint exercises, warm-up, sun salutation, meditation, and breathing exercises in 1 hour of the session. Please bring your own mat and water. Wear comfortable clothes. We will have back-to-back 2 separate sessions from 16:00 to 17:00 and 17:15 to 18:15. In case of rain, we will cancel the event."
        },
        {
          "id": "24650523-1634-44eb-bc46-42b1017f2978",
          "title": "Buddhism for Beginners",
          "category": "Health & Wellness",
          "host": "Brooklyn",
          "pic": "https://cdn.thecollector.com/wp-content/uploads/2022/08/Buddhism-religion-philosophy.jpg",
          "location": "Vajradhara Meditation Center",
          "date": "2023-09-11",
          "start": "19:00",
          "end": "20:00",
          "descTitle": "Details",
          "description": "Curious about Buddhism? This in-person weekly class presents basic teachings that you can immediately use to improve your work and relationships, cultivate inner peace, and increase your enjoyment of daily life. Each hour-long class includes a talk, two short meditations, and time for discussion. Please arrive early to meet others and stay afterward for snacks and discussion! Everyone is welcome!"
        }]
     }
]

exports.find = () => connections;
//exports.findById = id => connections.find(story=>story.id===id);

exports.findById = function (id) {
    for (const categoryObj of connections) {
      for (const eventKey in categoryObj.data) {
        const event = categoryObj.data[eventKey];
        if (event.id === id) {
          return event;
        }
      }
    }
    
  }

  exports.updateById = function(id,connection){
    for (const categoryObj of connections) {
        for (const event of categoryObj.data) {
          if (event.id === id) {
            console.log(event);
            event.title=connection.title;
            event.category=connection.category;
            event.host=connection.host;
            event.location=connection.location;
            event.description= connection.description;
            event.descTitle = connection.descTitle;
            event.date=connection.date;
            event.start=connection.start;
            event.end=connection.end;
            event.pic=connection.pic;
            event.category=connection.category;
            return true; 
          }
          
        }
      }
      return false;
      
    }

exports.deleteById=function (id) {
        
        for (let i = 0; i < connections.length; i++) {
          const categoryObj = connections[i];
          const data = categoryObj.data;
      
          
          const eventIndex = data.findIndex(event => event.id === id);
      
          
          if (eventIndex !== -1) {
            data.splice(eventIndex, 1);
            return true;
          }
        }
      
        
        return false;
      }

  
    