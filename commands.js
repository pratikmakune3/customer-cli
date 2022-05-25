#! /usr/bin/env node

/* REMAINDER - Don't forget to "yarn link" to create symlink before running customer-cli app */

import { program } from "commander";

import { addCustomer, findCustomer } from "./index.js";

program
  .version('1.0.0')
  .description('client management system')

program
  .command('ADD_CUSTOMER <firstname> <lastname>')
  .alias('add')
  .description('add a customer to db')
  .action((firstname, lastname) => {
    addCustomer(firstname, lastname)
  })

program
  .command('FIND_CUSTOMER <firstname>')
  .alias('find')
  .description('find a customer from db')
  .action((firstname) => {
    findCustomer(firstname)
  })

program.parse(process.argv)