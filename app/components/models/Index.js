import Realm from 'realm';

class Subject {}
Subject.schema = {
	name: 'Subject',
	primaryKey: 'id',
	properties: {
		id: 'int',
		index: 'int',
		title: 'string',
		info: 'string'
	}
};

class SubjectContent {}
SubjectContent.schema = {
	name: 'SubjectContent',
	properties: {
		index: 'int',
		fk: 'string',
		title: 'string',
		info: 'string',
		subject: 'string',
		type: 'string',
		new: 'bool'
	}
};

class Feedback {}
Feedback.schema = {
	name: 'Feedback',
	primaryKey: 'id',
	properties: {
		id: 'int',
		index: {type: 'int'},
		title: 'string',
		mark: 'int',
		comment: 'string',
		feedforward: 'string',
		new: 'bool',
		subject: 'string'
	}
};

class Note {}
Note.schema = {
	name: 'Note',
	properties: {
		id: 'int',
		index: {type: 'int'},
		title: 'string',
		note: 'string',
		subject: 'string'
	}
}

class YourSay{}
YourSay.schema = {
	name: 'YourSay',
	properties: {
		id: 'int',
		index: {type: 'int'},
		title: 'string',
		comments: 'string', 
		subject: 'string',
		feedback: 'string'
	}
}

let realm = new Realm({schema: [Subject, SubjectContent, Feedback, Note, YourSay]});

export default realm;
