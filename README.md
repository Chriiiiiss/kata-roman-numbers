# Issues

How to transform a Arabic number into a Roman representation ?

## How to use ?

### Front - Debug

If you want to run the front end, which is only there to debug easily for the Product Owner, I'll let you run these commands:

```bash
cd front
npm i
npm run dev
```

If you want to run the back end, you can use this commands:

```bash
cd back
npm i
npm run dev
```

## Life Cycle

For the moment we're using the **KANBAN** method, and for development we're using **TDD**

In times of crisis, when a feature had to be added very quickly, **TDD was no longer used**.

Our sprints were based on a timing of 45 minutes **during school hours**, outside of school hours we switched to **5-hour sprints**.

### Kanban

We're using five columns: Backlogs - To-do - Doing - Code Review - Done

At the start of the sprint. We take time to break down requests into tasks. We have recently transformed our tasks into stories, which allows us to think things through once refined we can pass them to-do taking into account the limits for the sprint.

The "to-do" column has a limit of **5 tasks** and will represent the workload for the coming sprint.

Both Doing and Code-review have a limits of 3 tasks

We limited ourselves to 3 tasks per column to avoid **spreading ourselves too thin**, bearing in mind that we have relatively **short sprints**, we want to **deliver fairly quickly**, and we have a resource of 2 developers.

Lots of chaos during the **de-prioritization and re-prioritization of a new feature**. We decided to **"Fake it until you Make it"**.

A few "peer programming" sessions, notably in moments of crisis, using the LiveShare extension on VsCode.

A few code review sessions, especially during pull requests.

### TDD

Creating tests with "vitest" before starting to code a feature

> [!info]
> We're both not used to doing this, so we wanted to take advantage of this project to try TDD.
> Red -> Green -> Refactor

You can run the tests following this command:

```bash
cd front
npm run test
```

## CI

We have a CI that launches our tests before letting us push to dev or main, dev being a protection before pushing to prod.

## Tools links

[Trello](https://trello.com/invite/b/zQNnOfp2/ATTI1d5558b684fefc358f75db4bc359a5ea4CED8AB9/exercice-cycle-de-vie)

[Front in Prod](https://life-cycle-red.vercel.app/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
