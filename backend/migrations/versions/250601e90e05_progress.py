"""progress

Revision ID: 250601e90e05
Revises: c90da7f8a51e
Create Date: 2024-01-24 12:00:18.806926

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '250601e90e05'
down_revision = 'c90da7f8a51e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('goals', schema=None) as batch_op:
        batch_op.add_column(sa.Column('ready', sa.Boolean(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('goals', schema=None) as batch_op:
        batch_op.drop_column('ready')

    # ### end Alembic commands ###
