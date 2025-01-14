import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne, JoinTable} from  'typeorm'
import { Teams } from './Teams';
import { InspectionGroup } from './InspectionGroup';
import { User } from './Users';
import { Log } from './Log';

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number

    @Column({})
    title: string;

    @Column({})
    type: string;

    @Column({})
    description: string;

    @Column( {})
    status: string;

    @ManyToOne(() => Teams, (teams) => teams.id)
    teams: Teams[]

    @ManyToOne(() => InspectionGroup, (inspectionGroup) => inspectionGroup.id)
    inspectionGroup: InspectionGroup;

    @ManyToOne(() => User, (user) => user.id)
    user: User;

    @ManyToMany(() => Log, (log) => log.id)
    @JoinTable()
    logs = Array<Log>;

} 