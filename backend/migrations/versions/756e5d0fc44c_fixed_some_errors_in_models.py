"""fixed some errors in models

Revision ID: 756e5d0fc44c
Revises: 77468b6eb89e
Create Date: 2024-01-22 11:02:09.632929

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '756e5d0fc44c'
down_revision = '77468b6eb89e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('exercises', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=False))
        batch_op.create_foreign_key(batch_op.f('fk_exercises_user_id_users'), 'users', ['user_id'], ['id'])

    with op.batch_alter_table('goals', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=False))
        batch_op.create_foreign_key(batch_op.f('fk_goals_user_id_users'), 'users', ['user_id'], ['id'])

    with op.batch_alter_table('workouts', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=False))
        batch_op.create_foreign_key(batch_op.f('fk_workouts_user_id_users'), 'users', ['user_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('workouts', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_workouts_user_id_users'), type_='foreignkey')
        batch_op.drop_column('user_id')

    with op.batch_alter_table('goals', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_goals_user_id_users'), type_='foreignkey')
        batch_op.drop_column('user_id')

    with op.batch_alter_table('exercises', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_exercises_user_id_users'), type_='foreignkey')
        batch_op.drop_column('user_id')

    # ### end Alembic commands ###
