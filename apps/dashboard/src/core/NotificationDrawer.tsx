import React, { FC, Fragment } from 'react'
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useReactiveVar } from '@apollo/client'
import { showDrawer } from 'store'
import { useGetTelematicData } from 'services/api'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AlertIcon from 'ui/icons/Alert'

interface Props {}

const NotificationDrawer: FC<Props> = () => {
  
  const open = useReactiveVar(showDrawer)
  const rows = useGetTelematicData({ filters: { showOnlyAlerts: true} })
  
  const onClose = () => {
    showDrawer(false)
  }
  
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor='right'
    >
      <Box sx={{ padding: '2rem' }}>
        <Typography variant='h3'>
          Alerts
        </Typography>
      </Box>
      <List>
        {rows.map((record) => (
          <Fragment key={record.EquipmentHeader.SerialNumber}>
            <ListItem>
              <ListItemText primary={record.EquipmentHeader.Model } secondary={record.EquipmentHeader.SerialNumber} />
            </ListItem>
            {Object.entries(record.Alerts).map(([name, alert]) => (
              <ListItemButton sx={{ pl: 4 }} key={alert.reason}>
                  <ListItemIcon>
                    <AlertIcon />
                  </ListItemIcon>
                  <ListItemText primary={alert.reason} />
                </ListItemButton>
            ))}
            <Divider />
          </Fragment>
        ))}
      </List>
    </Drawer>
  )
}

export default NotificationDrawer
