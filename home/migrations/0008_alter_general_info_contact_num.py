# Generated by Django 4.0.5 on 2022-08-05 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_alter_general_info_certification_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='general_info',
            name='contact_num',
            field=models.CharField(max_length=30, null=True),
        ),
    ]
