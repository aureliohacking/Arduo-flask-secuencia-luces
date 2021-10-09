from flask import Flask, url_for, redirect, render_template, Blueprint
from Serialx import enviar


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/lala')    
def lala():
    enviar('1')
    return 'hello'

@app.route('/lele')    
def lele():
    enviar('2')
    return 'hello'

@app.route('/lili')    
def lili():
    enviar('3')
    return 'hello'

@app.route('/lulu')    
def lulu():
    enviar('4')
    return 'hello'