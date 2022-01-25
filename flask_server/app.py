from flask import Flask

app = Flask(__name__)

# Members API route
@app.route('/members')
def members():
  return {"members" : ["John", "Mary", "Bob", "Jane"]}

if __name__ == '__main__':
  app.run(debug=True)