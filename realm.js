import Realm from 'realm';

const Subject = {
	name: 'Subject',
	properties: {
		index: {type: 'int'},
		title: 'string',
		info: 'string',
		new: 'bool'
	}
}

let realm = new Realm({schema: [Subject]});