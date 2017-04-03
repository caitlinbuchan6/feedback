realm.write(() => {
	realm.create('Subject', {id: 1, index: 2, title: 'Web Development', info: 'An Introduction to Web Development using JavaScript, HTML and CSS'});
	realm.create('Subject', {id: 2, index: 3, title: 'Coding in Java', info: 'Learning to Code using and Object Oriented Language'});
	realm.create('Subject', {id: 3, index: 4, title: 'Oracle Database', info: 'Basics of Database Use and Design'});
	realm.create('Subject', {id: 4, index: 5, title: 'Analysis and Design', info: 'Learning the Basics of Software Planning through Analysis and Design'});
})

realm.write(() => {
	realm.create('SubjectContent', {index: 6,  fk: '1', title: 'My First Website', info: '', subject: '1', type: 'Feedback', new: false});
	realm.create('SubjectContent', {index: 7,  fk: '2', title: 'Working with JavaScript', info: '', subject: '1', type: 'Feedback', new: true});
	realm.create('SubjectContent', {index: 8,  fk: '3', title: 'Creating an Abstract Class', info: '', subject: '2', type: 'Feedback', new: false});
	realm.create('SubjectContent', {index: 9,  fk: '4', title: 'The Advantages and Disadvantages of Using Oracle', info: '', subject: '3', type: 'Feedback', new: false});
	realm.create('SubjectContent', {index: 10, fk: '5', title: 'The Data Flow Diagram', info: '', subject: '4', type: 'Feedback', new: true});
	realm.create('SubjectContent', {index: 11, fk: '6', title: 'Requirements Gathering', info: '', subject: '4', type: 'Feedback', new: false});
	realm.create('SubjectContent', {index: 12, fk: '7', title: 'Creating a Specification using Structured English', info: '', subject: '4', type: 'Feedback', new: false});
	realm.create('SubjectContent', {index: 13, fk: '1', title: 'To Do - Website Improvements', info: '', subject: '1', type: 'Note', new: false});
	realm.create('SubjectContent', {index: 14, fk: '2', title: 'Notes of JavaScript', info: '', subject: '1', type: 'Note', new: false});
	realm.create('SubjectContent', {index: 15, fk: '3', title: 'Abstraction', info: '', subject: '2', type: 'Note', new: false});
	realm.create('SubjectContent', {index: 16, fk: '4', title: 'Robust Code Notes', info: '', subject: '2', type: 'Note', new: false});
	realm.create('SubjectContent', {index: 17, fk: '5', title: 'To Do - Gathering Requirements', info: '', subject: '3', type: 'Note', new: false});
	realm.create('SubjectContent', {index: 18, fk: '6', title: 'Structured English Notes', info: '', subject: '4', type: 'Note', new: false});
	realm.create('SubjectContent', {index: 19, fk: '1', title: 'My First Website - Reply', info: '', subject: '1', type: 'Your Say', new: false});
	realm.create('SubjectContent', {index: 20, fk: '2', title: 'Creating An Abstract Class - Reply', info: '', subject: '2', type: 'Your Say', new: false});
	realm.create('SubjectContent', {index: 21, fk: '3', title: 'The Advantages and Disadvantages of Using Oracle - Reply', info: '', subject: '3', type: 'Your Say', new: false});
	realm.create('SubjectContent', {index: 22, fk: '4', title: 'Requirements Gathering', info: '', subject: '4', type: 'Your Say', new: false});
})

realm.write(() => {
	realm.create('Feedback', {id: 1, index: 6, title: 'My First Website', mark: 34, comment: 'This is where comments on the piece of work will go', feedforward: 'This is where the lecturer will talk about things the student can to do improve in the future', new: false, subject: '1'});
	realm.create('Feedback', {id: 2, index: 7, title: 'Working with JavaScript', mark: 56, comment: 'This is where comments on the piece of work will go', feedforward: 'This is where the lecturer will talk about things the student can to do improve in the future', new: true, subject: '1'});
	realm.create('Feedback', {id: 3, index: 8, title: 'Creating an Abstract Class', mark: 87, comment: 'This is where comments on the piece of work will go', feedforward: 'This is where the lecturer will talk about things the student can to do improve in the future', new: false, subject: '2'});
	realm.create('Feedback', {id: 4, index: 9, title: 'The Advantages and Disadvantages of Using Oracle', mark: 74, comment: 'This is where comments on the piece of work will go', feedforward: 'This is where the lecturer will talk about things the student can to do improve in the future', new: false, subject: '3'});
	realm.create('Feedback', {id: 5, index: 10, title: 'The Data Flow Diagram', mark: 81, comment: 'This is where comments on the piece of work will go', feedforward: 'This is where the lecturer will talk about things the student can to do improve in the future', new: true, subject: '4'});
	realm.create('Feedback', {id: 6, index: 11, title: 'Requirements Gathering', mark: 65, comment: 'This is where comments on the piece of work will go', feedforward: 'This is where the lecturer will talk about things the student can to do improve in the future', new: false, subject: '4'});
	realm.create('Feedback', {id: 7, index: 12, title: 'Creating a Specification using Structured English', mark: 67, comment: 'This is where comments on the piece of work will go', feedforward: 'This is where the lecturer will talk about things the student can to do improve in the future', new: false, subject: '4'});
})

realm.write(() => {
	realm.create('Note', {id: 1, index: 13, title: 'To Do - Website Improvements', note: 'This is the place to put things that you would like to remember about the feedback', subject: '1'});
	realm.create('Note', {id: 2, index: 14, title: 'Notes of JavaScript', note: 'This is the place to put things that you would like to remember about the feedback', subject: '1'});
	realm.create('Note', {id: 3, index: 15, title: 'Abstraction', note: 'This is the place to put things that you would like to remember about the feedback', subject: '2'});
	realm.create('Note', {id: 4, index: 16, title: 'Robust Code Notes', note: 'This is the place to put things that you would like to remember about the feedback', subject: '2'});
	realm.create('Note', {id: 5, index: 17, title: 'To Do - Gathering Requirements', note: 'This is the place to put things that you would like to remember about the feedback', subject: '3'});
	realm.create('Note', {id: 6, index: 18, title: 'Structured English Notes', note: 'This is the place to put things that you would like to remember about the feedback', subject: '4'});
})

realm.write (() => {
	realm.create('YourSay', {id: 1, index: 19, title: 'My First Website - Reply', comments: 'This is where the student can reply to the feedback given by the lecturer.', subject: '1', feedback: '1'});
	realm.create('YourSay', {id: 2, index: 20, title: 'Creating An Abstract Class - Reply', comments: 'This is where the student can reply to the feedback given by the lecturer.', subject: '2', feedback: '3'});
	realm.create('YourSay', {id: 3, index: 21, title: 'The Advantages and Disadvantages of Using Oracle - Reply', comments: 'This is where the student can reply to the feedback given by the lecturer.', subject: '3', feedback: '4'});
	realm.create('YourSay', {id: 4, index: 22, title: 'Requirements Gathering', comments: 'This is where the student can reply to the feedback given by the lecturer.', subject: '4', feedback: '6'});
})
