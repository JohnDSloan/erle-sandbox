# Generated by Django 2.2 on 2020-05-29 11:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('saoirse', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='synthesisedspeech',
            name='url',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
