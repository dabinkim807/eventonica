# Quick-setup 

#### Once you have successfully setup this template and initial database, the view will look like this:

![Initial View of the project](https://raw.githubusercontent.com/Yosolita1978/screenshoots/50a5573f21c1265d20d838a36b98588f9b4eefce/2023/H1/Screen%20Shot%202023-03-09%20at%208.03.32%20PM.png)
### Your First Express and React App with a DB connection

1. Go to your source directory in your terminal and run the command `git clone https://github.com/Yosolita1978/2023EventonicaTemplate.git <NAMENEWDIRECTORY>`
![You will see something like this in your terminal.]

> <img width="768" alt="Screen Shot 2023-03-10 at 11 10 34 AM" src="https://user-images.githubusercontent.com/102179075/224608432-5e3d18bd-7cf5-4576-8b3f-2e903106abe1.png">

2. To clean your folder from the owner's git, run the command `rm -rf .git` inside the folder <NAMENEWDIRECTORY>. Then re-initialize as the owner with `git init`.

3. Go to the server folder in the project (`cd server`) and run the command `npm install`

4. Go to the client folder (`cd .. and cd client`) and run the command `npm install`

5. This template has two servers already working. Both servers should start simultaneously, or "concurrently", by running `npm run dev` from within the server directory in your terminal. Please note that your backend server will run from port 8080, and your frontend React server will run from port 3000 .

6. To add a Postgres DB

 > 6.1 Inside your server directory create a `.env` file and copy there the values that are in `.envexample`
In a new terminal window go inside the server directory and run the command `psql -U postgres -f db.sql` that will create a database `eventonica` and a table `events` with 5 rows. 

 > 6.2 Copy the setup instructions for [pg](https://node-postgres.com/apis/pool) in your db folder (you have to create one). Your connection string is probably something like postgres://localhost:5432/eventonica or postgresql://@localhost/eventonica. You should not need a username or password if you setup [postgres correctly](https://github.com/Techtonica/curriculum/blob/main/databases/installing-postgresql.md).

![Your DB should look like this](https://raw.githubusercontent.com/Yosolita1978/screenshoots/696689a627eb5ca206b5a2eaebec7cc1efa15ffc/2023/H1/Screen%20Shot%202023-03-09%20at%208.25.54%20PM.png)



