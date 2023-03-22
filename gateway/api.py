from flask import Flask, request

app = Flask(__name__)

@app.route('/sth', methods=['POST'])
def handle_request():
  data = request.get_json()
  if data['buttonClicked']:
    print('Button clicked!')
  return 'OK'

 