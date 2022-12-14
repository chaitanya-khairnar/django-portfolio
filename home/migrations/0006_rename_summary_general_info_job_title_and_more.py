# Generated by Django 4.0.5 on 2022-08-05 11:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_jobs_in_job_experience'),
    ]

    operations = [
        migrations.RenameField(
            model_name='general_info',
            old_name='summary',
            new_name='job_title',
        ),
        migrations.AddField(
            model_name='general_info',
            name='certification',
            field=models.TextField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='general_info',
            name='programming',
            field=models.TextField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='general_info',
            name='techniques',
            field=models.TextField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='general_info',
            name='tools',
            field=models.TextField(max_length=100, null=True),
        ),
    ]
