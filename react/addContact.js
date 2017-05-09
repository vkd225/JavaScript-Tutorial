var contacts = [
			{key: 1, name: "Vikash Deo", email: "deo@triconinfotech.com", description: "Associate Software Engineer"},
			{key: 2, name: "Bob", email: "bob@bob.com"},
			{key: 3, name: "Joe"}
		]

		// var listElements = contacts
		// 	.filter(function(contact){ return contact.email; })
		// 	.map(function(contact){
		// 		return React.createElement('li', {key: contact.key},
		// 			React.createElement('h2',{}, contact.name),
		// 			React.createElement('a',{href: 'mailto'+contact.email}, contact.email)

		// 		)
		// })

		var newContact = {name: "", email: "", description: ""}

		var ContactItem = React.createClass({
			propTypes: {
				name: React.PropTypes.string.isRequired,
				email: React.PropTypes.string.isRequired,
				description: React.PropTypes.string,
			},



			render:function(){
				return (
					React.createElement('li', {className: 'ContactItem'},
						React.createElement('h2', {className: 'ContactItem-name'}, this.props.name),
						React.createElement('a',{className: 'ContactItem-email', href:'mailto:'+this.props.email}, this.props.email),
						React.createElement('div',{className: 'ContactItem-description'},this.props.description)
						)
					)
			},
		});

		var ContactForm = React.createClass({
			propTypes: {
				contact: React.PropTypes.object.isRequired
			},


			render: function() {
				return (
					React.createElement('form', {className: 'ContactForm'},
						React.createElement('input',{
							type: 'text',
							placeholder: 'Name (required)',
							value: this.props.contact.name,
						}),


						React.createElement('input', {
							type: 'email',
							placeholder: 'Email',
							value: this.props.contact.email,


						}),

						React.createElement('textarea', {
							placeholder: 'Description',
							value: this.props.contact.description,
						}),
						React.createElement('button', {type: 'submit'}, "Add Contact")


						)
					)
			},
		})

		var ContactView = React.createClass({
			propTypes: {
				contacts: React.PropTypes.array.isRequired,
				newContact: React.PropTypes.object.isRequired,
			},

			render: function(){
				var contactItemElements = this.props.contacts
				.filter(function (contact){ return contact.email })
				.map(function(contact){return React.createElement(ContactItem, contact) })

				return (
					React.createElement('div', {className: 'ContactView'},
						React.createElement('h1', {className: 'ContactView-title'}, "Contacts"),
						React.createElement('ul', {className: 'ContactView-list'}, contactItemElements),
						React.createElement(ContactForm, {contact: this.props.newContact})
						)
					)
			},
		})

		var contactItemElements = contacts
			.filter(function(contact){ return contact.email})
			.map(function(contact) { return React.createElement(ContactItem, contact) })



		var rootElement = 
			React.createElement('div',{},
				React.createElement('h1', {}, "Contacts"),
				React.createElement('ul', {}, contactItemElements),
				React.createElement(ContactForm, {contact:newContact})
			)



		ReactDOM.render(
			React.createElement(ContactView, {
				contacts: contacts,
				newContact: newContact
			}),
			document.getElementById('react-app')
			)

		// var rootElement = React.createElement(ApplicationComponent, initialData)
		// ReactDOM.render(rootElement, document.getElementById('react-app'))

		// var nextRootElement = React.createElement(ApplicationComponent, updateData)
		// ReactDOM.render(nextRootElement, document.getElementById('react-app'))


