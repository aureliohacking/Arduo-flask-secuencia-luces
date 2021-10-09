import serial
import time

serialArduino = serial.Serial("COM6", 9600)

def enviar(x):
    x = str(x)
    serialArduino.write(x.encode('ascii'))