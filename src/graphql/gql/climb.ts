import { gql } from '@apollo/client'

export interface ClimbProps{
  id: number
  ascents: {
    id: number
    _date?: string
    climber: {
      id: number
        name: string
        country: {
          id: number
          name: string
        }
    }
  }[]
  crag: {
    id: number
    name: string
    country: {
      name: string
    }
  } 
  grade: string
  name: string
  description: string
}

export const QUERY_ALL_CLIMBS = gql`
query Climbs($order_by: [climb_order_by!], $where: climb_bool_exp, $limit: Int) {
  climb(order_by: $order_by, where: $where, limit: $limit) {
    id
    name
    grade
    added_at
    ascents {
      id
      _date
      climber {
        id
        name
        home_country {
          id
          name
        }
      }
    }
    crag {
      id
      name
      country {
        id
        name
      }
    }
    description
  }
}
`