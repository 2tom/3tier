# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"
Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = "3tier"
  config.vm.network :private_network, ip:"192.168.57.51"
  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "1024", "--ioapic", "on"]
  end
  config.vm.provision :ansible do |ansible|
    ansible.playbook = "3tier.yml"
    ansible.inventory_path = "3tier_hosts"
    ansible.limit = "all"
  end
end
