@echo off

SET CUR_DIR=%~dp0
ECHO %CUR_DIR%


cd %CUR_DIR%/Auth
call docker build -t nghilt19411/auth .
call docker push nghilt19411/auth

cd .. 

cd %CUR_DIR%/Client
call docker build -t nghilt19411/client .
call docker push nghilt19411/client

cd .. 

cd %CUR_DIR%/Tickets
call docker build -t nghilt19411/tickets .
call docker push nghilt19411/tickets

cd .. 

cd %CUR_DIR%/Orders
call docker build -t nghilt19411/orders .
call docker push nghilt19411/orders

cd .. 

cd %CUR_DIR%/Expiration
call docker build -t nghilt19411/expiration .
call docker push nghilt19411/expiration