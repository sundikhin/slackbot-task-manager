const modalView = {
	"title": {
		"type": "plain_text",
		"text": "Assign a task"
	},
	"submit": {
		"type": "plain_text",
		"text": "Submit"
	},
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Who do you want to assign this task to?"
			},
			"accessory": {
				"type": "users_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Select a user",
					"emoji": true
				}
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"action_id": "ml_input",
				"multiline": true,
				"placeholder": {
					"type": "plain_text",
					"text": "Report due prior to presentation next week"
				}
			},
			"label": {
				"type": "plain_text",
				"text": "What is your task?"
			},
			"hint": {
				"type": "plain_text",
				"text": "Hint text"
			}
		}
	],
	"type": "modal"
}

module.exports = { modalView };