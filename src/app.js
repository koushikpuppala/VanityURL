const express = require('express');
const app = express();
const path = require('path');
const Partner = require('./models/PartnerShip');
const Discord = require('discord.js');
const client = new Discord.Client();
const database = require('./database/database');

database.then(() => console.log(`Connected to MONGO_DB.`)).catch(err => console.log(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendStatus(200);
});

app.get('/:VanityURL', (req, res) => {
	Partner.findOne({ VanityURL: req.params.VanityURL.toLowerCase() }, (err, VanityURL) => {
		res.render('vanity_url', {
			VanityURL: VanityURL,
			GuildId: req.params.GuildId,
			InviteLink: req.params.InviteLink,
			Description: req.params.Description,
			GuildIcon: client.guild.get("`${req.params.GuildId}`").iconURL(),
			GuildName: client.guild.get("`${req.params.GuildId}`").name,
		})
	})
});


app.listen(3000, () => {
    console.log(`Now listening to request on port https://localhost:3000`);
});