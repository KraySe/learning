class UserColaboration {
    public constructor(
        public readonly userId: number,
        public readonly name: string,
        public readonly job: string
    ) { }
}

class UserColaborationRepository {
    private users: Array<UserColaboration> = [
        new UserColaboration(1, 'Eduardo', 'Software Developer'),
        new UserColaboration(2, 'José', 'Police')
    ];

    public retrieve(userId: number): UserColaboration {
        return this.users.find(x => x.userId == userId) as UserColaboration;
    }

    public add(user: UserColaboration): void {
        this.users.push(user);
    }
}