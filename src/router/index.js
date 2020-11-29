import Vue from 'vue'
import Router from 'vue-router'
import ProfileG from '@/components/grader/ProfileG'
import Grade from '@/components/grader/Grade'
import ProfileS from '@/components/submitter/ProfileS'
import Submit from '@/components/submitter/Submit'
import Results from '@/components/submitter/Results'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/profileG',
      name: 'ProfileG',
      component: ProfileG
    },

    {
      path: '/grade',
      name: 'Grade',
      component: Grade
    },

    {
      path: '/profileS',
      name: 'ProfileS',
      component: ProfileS
    },

    {
      path: '/submit',
      name: 'Submit',
      component: Submit
    },

    {
      path: '/results',
      name: 'Results',
      component: Results
    }

  ]
})
