import Realm from 'realm';

class Subject {}
Subject.schema = {
	name: 'Subject',
	properties: {
		index: 'int',
		title: 'string',
		info: 'string',
		new: 'bool'
	}
};

class Feedback {}
Feedback.schema = {
	name: 'Feedback',
	properties: {
		index: {type: 'int'},
		title: 'string',
		mark: 'int',
		comment: 'string',
		feedforward: 'string'
	}
};

class Note {}
Note.schema = {
	name: 'Note',
	properties: {
		index: {type: 'int'},
		title: 'string',
		note: 'string'
	}
}

class SubjectContent {}
SubjectContent.schema = {
	name: 'SubjectContent',
	properties: {
		index: {type: 'int'},
		title: 'string',
		info: 'string',
		type: 'string',
		new: 'bool'
	}
}

class YourSay{}
YourSay.schema = {
	name: 'YourSay',
	properties: {
		index: {type: 'int'},
		title: 'string',
		comments: 'string'
	}
}

let realm = new Realm({schema: [Subject, Feedback, Note, SubjectContent, YourSay]});

export default realm;
