"""model change

Revision ID: 5b3be97a3c7e
Revises: 87972485c34f
Create Date: 2024-01-23 14:10:01.362840

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5b3be97a3c7e'
down_revision = '87972485c34f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('milestones', schema=None) as batch_op:
        batch_op.add_column(sa.Column('completed', sa.Boolean(), nullable=True))
        batch_op.add_column(sa.Column('completed_date', sa.DateTime(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('milestones', schema=None) as batch_op:
        batch_op.drop_column('completed_date')
        batch_op.drop_column('completed')

    # ### end Alembic commands ###
